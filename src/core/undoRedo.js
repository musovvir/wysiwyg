class Node {
    constructor(data, prev = null, next = null) {
      this.data = data;
      this.prev = prev;
      this.next = next;
    }
  }
  
  class UndoRedo {
    constructor(maxLength = 10) {
      this.maxLength = maxLength;
      this.current = null;
      this.head = null;
    }
  
    push(data) {
      const newNode = new Node(data);
      if (this.current === null) {
        this.current = newNode;
        this.head = newNode;
      } else {
        newNode.prev = this.current;
        this.current.next = newNode;
        this.current = newNode;
      }
  
      if (this.length() > this.maxLength) {
        this.head = this.head.next;
        this.head.prev = null;
      }
    }
  
    undo() {
      if (this.current && this.current.prev) {
        this.current = this.current.prev;
        return this.current.data;
      }
      return null;
    }
  
    redo() {
      if (this.current && this.current.next) {
        this.current = this.current.next;
        return this.current.data;
      }
      return null;
    }
  
    getCurrentState() {
      return this.current ? this.current.data : null;
    }
  
    length() {
      let count = 0;
      let node = this.head;
      while (node !== null) {
        count++;
        node = node.next;
      }
      return count;
    }
  }
  
  // Пример использования
  
  const history = new UndoRedo(5);
  
  history.push("Стартовое состояние");
  console.log("Текущее состояние:", history.getCurrentState());
  
  history.push("Шаг 1");
  console.log("Текущее состояние:", history.getCurrentState());
  
  history.push("Шаг 2");
  console.log("Текущее состояние:", history.getCurrentState());
  
  history.undo();
  console.log("После undo:", history.getCurrentState());
  
  history.redo();
  console.log("После redo:", history.getCurrentState());
  