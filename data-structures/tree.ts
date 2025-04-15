class Node {
  public value: number
  public left?: Node
  public right?: Node

  constructor(value: number, left?: Node, right?: Node) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class BinaryTree {
  public root?: Node
  constructor(root?: Node) {
    this.root = root
  }

  isEmpty() {
    return !this.root
  }

  insert(value: number) {
    const node = new Node(value)

    if (this.isEmpty()) {
      this.setRoot(node)
      return
    }

    this.insertNode(node, this.root)
  }

  private insertNode(node: Node, root?: Node) {
    if (!root) return

    if (node.value < root.value) {
      if (root.left === undefined) {
        root.left = node

        return
      }

      this.insertNode(root.left, node)
      return
    }

    if (root.right === undefined) {
      root.right = node

      return
    }
    this.insertNode(root.right, node)
  }

  setRoot(node: Node) {
    this.root = node
  }

  search({ root, value }: { root?: Node; value: number }): boolean {
    if (!root) return false

    if (root.value === value) return true

    if (root.left === undefined) return false

    if (value < root.value) return this.search({ root: root.left, value })

    if (root.right === undefined) return false

    if (value > root.value) return this.search({ root: root.right, value })

    return false
  }
}

const bst = new BinaryTree()
