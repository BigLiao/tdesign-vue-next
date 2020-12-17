import Vue, { VNode } from 'vue';
import upperFirst from 'lodash/upperFirst';

import {
  TreeStore,
  TreeFilterOptions,
  TreeNodeValue,
  TypeValueMode,
  TreeEventState,
} from '../../common/js/tree/TreeStore';
import {
  TreeNode,
  TreeNodeProps,
  TreeNodeData,
} from '../../common/js/tree/TreeNode';
import TreeItem from './TreeItem';
import {
  TreeProps,
  EventState,
} from './interface';
import {
  TREE_NAME,
  CLASS_NAMES,
  FX,
} from './constants';
import { getRole } from './util';

export default Vue.extend({
  name: TREE_NAME,
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    ...TreeProps,
  },
  data() {
    const {
      checkProps,
      empty,
      icon,
      label,
      line,
      operations,
    } = this;

    return {
      store: null,
      nodesMap: null,
      treeNodes: [],
      treeScope: {
        checkProps,
        empty,
        icon,
        label,
        line,
        operations,
      },
      transitionCD: null,
    };
  },
  computed: {
    classList(): ClassName {
      const list: Array<string> = [CLASS_NAMES.tree];
      const {
        disabled,
        hover,
        transition,
      } = this;
      if (disabled) {
        list.push(CLASS_NAMES.disabled);
      }
      if (hover) {
        list.push(CLASS_NAMES.treeHoverable);
      }
      if (transition) {
        list.push(CLASS_NAMES.treeFx);
      }
      return list;
    },
  },
  watch: {
    data(list) {
      this.store.removeAll();
      this.store.append(list);
    },
    keys(nKeys) {
      this.store.setConfig({
        keys: nKeys,
      });
    },
    value(nVal) {
      this.store.replaceChecked(nVal);
    },
    expanded(nVal) {
      this.store.replaceExpanded(nVal);
    },
    expandAll(isExpandAll) {
      this.store.setConfig({
        expandAll: isExpandAll,
      });
    },
    expandLevel(nExpandLevel) {
      this.store.setConfig({
        expandLevel: nExpandLevel,
      });
    },
    expandMutex(nExpandMutex) {
      this.store.setConfig({
        expandMutex: nExpandMutex,
      });
    },
    expandParent(isExpandParent) {
      this.store.setConfig({
        expandParent: isExpandParent,
      });
    },
    activable(isActivable) {
      this.store.setConfig({
        activable: isActivable,
      });
    },
    activeMultiple(isActiveMultiple) {
      this.store.setConfig({
        activeMultiple: isActiveMultiple,
      });
    },
    actived(nVal) {
      this.store.replaceActived(nVal);
    },
    disabled(isDisabled) {
      this.store.setConfig({
        disabled: isDisabled,
      });
    },
    checkable(isCheckAble) {
      this.store.setConfig({
        checkable: isCheckAble,
      });
    },
    checkStrictly(isCheckStrictly) {
      this.store.setConfig({
        checkStrictly: isCheckStrictly,
      });
    },
    load(fn) {
      this.store.setConfig({
        load: fn,
      });
    },
    lazy(isLazy) {
      this.store.setConfig({
        lazy: isLazy,
      });
    },
    valueMode(nMode) {
      this.store.setConfig({
        valueMode: nMode,
      });
    },
    filter(fn) {
      this.filterItems(fn);
    },
    checkProps(props) {
      this.treeScope.checkProps = props;
    },
    empty(tnode) {
      this.treeScope.empty = tnode;
    },
    icon(tnode) {
      this.treeScope.icon = tnode;
    },
    label(tnode) {
      this.treeScope.label = tnode;
    },
    line(tnode) {
      this.treeScope.line = tnode;
    },
    operations(tnode) {
      this.treeScope.operations = tnode;
    },
  },
  methods: {
    // 创建单个 tree 节点
    renderItem(node: TreeNode) {
      const {
        empty,
        checkProps,
        icon,
        label,
        line,
        operations,
        $scopedSlots: scopedSlots,
      } = this;

      Object.assign(this.treeScope, {
        checkProps,
        scopedSlots,
        empty,
        icon,
        label,
        line,
        operations,
      });

      const treeItem = (
        <TreeItem
          key={node.value}
          node={node}
          treeScope={this.treeScope}
          onClick={this.handleClick}
          onChange={this.handleChange}
        />
      );
      return treeItem;
    },
    refresh() {
      const {
        store,
        treeNodes,
      } = this;

      let { nodesMap } = this;

      if (!nodesMap) {
        nodesMap = new Map();
        this.nodesMap = nodesMap;
      }

      let index = 0;
      while (index < treeNodes.length) {
        const nodeView = treeNodes[index];
        if (nodeView && nodeView.componentInstance) {
          const { node } = nodeView.componentInstance;
          if (node && !store.getNode(node)) {
            // 视图列表中的节点，在树中不存在
            const nodeViewIndex = treeNodes.indexOf(nodeView);
            treeNodes.splice(nodeViewIndex, 1);
            nodeView.componentInstance.$destroy();
            nodesMap.delete(node.value);
          } else {
            index += 1;
          }
        } else {
          index += 1;
        }
      }

      index = 0;
      const allNodes = store.getNodes();
      allNodes.forEach((node: TreeNode) => {
        if (node.visible) {
          if (nodesMap.has(node.value)) {
            const nodeView = nodesMap.get(node.value);
            const nodeViewIndex = treeNodes.indexOf(nodeView);
            if (nodeViewIndex !== index) {
              // 节点存在，但位置与可视节点位置冲突，需要更新节点位置
              treeNodes.splice(nodeViewIndex, 1);
              treeNodes.splice(index, 0, nodeView);
            }
          } else {
            // 节点可视，且不存在视图，创建该节点视图并插入到当前位置
            const nodeView = this.renderItem(node);
            treeNodes.splice(index, 0, nodeView);
            nodesMap.set(node.value, nodeView);
          }
          index += 1;
        } else {
          if (nodesMap.has(node.value)) {
            // 节点不可视，存在该视图，需要删除该节点视图
            const nodeView = nodesMap.get(node.value);
            const nodeViewIndex = treeNodes.indexOf(nodeView);
            treeNodes.splice(nodeViewIndex, 1);
            nodesMap.delete(node.value);
            nodeView.componentInstance.$destroy();
          }
        }
      });
    },
    build() {
      const list = this.data;
      const {
        activable,
        activeMultiple,
        checkable,
        checkStrictly,
        expanded,
        expandAll,
        expandLevel,
        expandMutex,
        expandParent,
        actived,
        disabled,
        load,
        lazy,
        value,
        valueMode,
        filter,
      } = this;

      if (list && list.length > 0) {
        const store = new TreeStore({
          keys: this.keys,
          activable,
          activeMultiple,
          checkable,
          checkStrictly,
          expandAll,
          expandLevel,
          expandMutex,
          expandParent,
          disabled,
          load,
          lazy,
          valueMode: valueMode as TypeValueMode,
          filter,
          onLoad: (info: TreeEventState) => {
            this.handleLoad(info);
          },
          onUpdate: (state: EventState) => {
            this.handleUpdate(state);
          },
        });

        // 初始化数据
        this.store = store;
        store.append(list);

        // 初始化选中状态
        if (Array.isArray(value)) {
          store.setChecked(value);
        }

        // 初始化展开状态
        if (Array.isArray(expanded)) {
          const expandedMap = new Map();
          expanded.forEach((val) => {
            expandedMap.set(val, true);
            if (expandParent === 'auto') {
              const node = store.getNode(val);
              node.getParents().forEach((tn) => {
                expandedMap.set(tn.value, true);
              });
            }
          });
          const expandedArr = Array.from(expandedMap.keys());
          store.setExpanded(expandedArr);
        }

        // 初始化激活状态
        if (Array.isArray(actived)) {
          store.setActived(actived);
        }

        // 树的数据初始化之后，需要立即进行一次视图刷新
        store.refreshNodes();
        this.refresh();
      }
    },
    toggleActived(node: TreeNode): string[] {
      return this.setActived(node, !node.isActived());
    },
    setActived(node: TreeNode, isActived: boolean) {
      const actived = node.setActived(isActived);
      const event = new Event('active');
      const state: EventState = {
        event,
        node,
        path: node.getPath(),
      };
      this.$emit('active', actived, state);
      return actived;
    },
    toggleExpanded(node: TreeNode): string[] {
      return this.setExpanded(node, !node.isExpanded());
    },
    setExpanded(node: TreeNode, isExpanded: boolean): string[] {
      const expanded = node.setExpanded(isExpanded);
      const event = new Event('expand');
      const state: EventState = {
        event,
        node,
        path: node.getPath(),
      };
      this.$emit('expand', expanded, state);
      return expanded;
    },
    toggleChecked(node: TreeNode): string[] {
      return this.setChecked(node, !node.isChecked());
    },
    setChecked(node: TreeNode, isChecked: boolean): string[] {
      const checked = node.setChecked(isChecked);
      const event = new Event('change');
      const state: EventState = {
        event,
        node,
        path: node.getPath(),
      };
      this.$emit('change', checked, state);
      return checked;
    },
    handleLoad(info: TreeEventState): void {
      const event = new Event('load');
      const { node, data } = info;
      const state: EventState = {
        event,
        node,
        data,
        path: node.getPath(),
      };
      this.$emit('load', state);
    },
    handleUpdate(info: EventState): void {
      const event = new Event('update');
      const { nodes } = info;
      const state: EventState = {
        event,
        nodes,
      };
      this.$emit('update', state);
      this.refresh();
    },
    handleClick(state: EventState): void {
      const {
        event,
        node,
      } = state;
      if (!node || this.disabled || node.disabled) {
        return;
      }
      const role = getRole(
        event.target as HTMLElement,
        event.currentTarget as HTMLElement
      );
      let clickOnRole = false;
      let clickOnIcon = false;
      let clickOnLabel = false;
      if (role && role.name) {
        clickOnRole = true;
        if (role.name === 'icon') {
          clickOnIcon = true;
        }
        if (role.name === 'label') {
          clickOnLabel = true;
        }
      }
      if (this.expandOnClickNode) {
        if (clickOnIcon) {
          this.toggleExpanded(node);
        }
        if (!clickOnRole) {
          this.toggleActived(node);
          this.toggleExpanded(node);
        } else if (clickOnLabel && !node.checkable) {
          this.toggleActived(node);
        }
      } else {
        if (clickOnIcon) {
          this.toggleExpanded(node);
        } else if (clickOnLabel && !node.checkable) {
          this.toggleActived(node);
        } else if (!clickOnRole) {
          this.toggleActived(node);
        }
      }
      this.$emit('click', state);
    },
    handleChange(state: EventState): void {
      const { disabled } = this;
      const { node } = state;
      if (!node || disabled || node.disabled) {
        return;
      }
      this.toggleChecked(node);
    },
    filterItems(fn: (node: TreeNode) => boolean): void {
      const { store } = this;
      store.setConfig({
        filter: fn,
      });
      store.updateAll();
    },
    setItem(value: TreeNodeValue, options: TreeNodeProps): void {
      const node = this.getItem(value);
      const spec = options;
      if (node && spec) {
        ['expanded', 'actived', 'checked'].forEach((name) => {
          this[`set${upperFirst(name)}`](node, spec[name]);
          delete spec[name];
        });
        node.set(spec);
      }
    },
    getItem(value: TreeNodeValue): TreeNode {
      return this.store.getNode(value);
    },
    getItems(value?: TreeNodeValue, options?: TreeFilterOptions): TreeNode[] {
      return this.store.getNodes(value, options);
    },
    getActived(value?: TreeNodeValue): TreeNode[] {
      return this.store.getActivedNodes(value);
    },
    getChecked(item?: TreeNodeValue): TreeNode[] {
      return this.store.getCheckedNodes(item);
    },
    append(para?: TreeNodeValue | TreeNode, item?: TreeNodeData): void {
      return this.store.appendNodes(para, item);
    },
    insertBefore(value: TreeNodeValue, item: TreeNodeData): void {
      return this.store.insertBefore(value, item);
    },
    insertAfter(value: TreeNodeValue, item: TreeNodeData): void {
      return this.store.insertAfter(value, item);
    },
    getParent(value: TreeNodeValue): TreeNode {
      return this.store.getParent(value);
    },
    getParents(value: TreeNodeValue): TreeNode {
      return this.store.getParents(value);
    },
    remove(value?: TreeNodeValue): void {
      return this.store.remove(value);
    },
    getIndex(value: TreeNodeValue): number {
      return this.store.getNodeIndex(value);
    },
  },
  created() {
    this.build();
  },
  render(): VNode {
    const {
      classList,
      treeNodes,
    } = this;

    return (
      <div class={classList}>
        <transition-group
          name={FX.treeNode}
          tag="div"
          class={CLASS_NAMES.treeList}
        >{treeNodes}</transition-group>
      </div>
    );
  },
});
