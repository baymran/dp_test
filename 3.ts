type LinkedListNode = {
  value: number;
  next: LinkedListNode | null;
}

const someList: LinkedListNode = {
  value: 1,
  next: {
      value: 2,
      next: {
          value: 3,
          next: {
              value: 4,
              next: null
          }
      }
  }
};

function reversePrint(linkedList: LinkedListNode | null): void {
  if (linkedList?.next !== null) {
      reversePrint(linkedList.next);
  }
  console.log(linkedList?.value);
}

reversePrint(someList);


// without recursion

// function reversePrint(linkedList: LinkedListNode | null): void {
//     const stack: LinkedListNode[] = [];

//     let currentNode = linkedList;
//     while (currentNode !== null) {
//         stack.push(currentNode);
//         currentNode = currentNode.next;
//     }

//     while (stack.length > 0) {
//         const node = stack.pop();
//         if (node) {
//             console.log(node.value);
//         }
//     }
// }

// reversePrint(someList);
