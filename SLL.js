//이론은 간단하다 뭐가 간단하냐 이게 간단하냐 뭐가 간단하냐
//면접 단골 문제중 하나 linked list 링크드리스트
//링크드리스트 : 기차라고 생각하면 된다.
//싱글링크드리스트 : 단방향일때
//더블링크드리스트 : 양방향으로 명령체계가 이뤄질때
//head 부터 시작 되는데 머리에 데이터가 없으면 새로운 시작점을 만들어줘야한다.
//pointer :

//배열리스트 : 사용하기가 쉽다.(index값으로 한번에 참조가 가능하다.)
//배열리스트 : 고정된크기 물론 가변형가능하다. 동적배열 가능(고정된크기)////자바스크립트를 제외한 언어

class SingleLinkedlistNode {
  constructor(data) {
    this.data = data;
    //연결을 해줘야되는 다음이 있어야된다.
    this.next = null;
  }
}
//node 한덩어리

//
class singlelinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    //this.size가 비었냐 = 0
    return this.size == 0;
  }
  insert(value) {
    //해드가 비어있으면 헤드는 신규노드로..
    if (this.head == null) {
      this.head = new SingleLinkedlistNode(value);
    }
    //아니라면
    else {
      //임시변수 선언
      let temp = this.head;
      this.head = new SingleLinkedlistNode(value);
      this.head.next = temp;
    }
    //메모리 사이즈를 한칸한칸씩 늘린다.
    this.size++;
  }
  //삭제 만들기?
  //SLL에서 노드를 삭제하는 것은 (remove) 해당 노드의 참조를 제거하면 된다.
  //만약 삭제하고자 하는 노드가 연결리스트의 중간에 있다면
  //삭제하고자 하는 노드의 next pointer(메모리주소 가르키는 주소) 삭제하고자 하는 노드의
  // 다음 노드를 가르키도록 한다.

  //
  remove(value) {
    let currentHead = this.head;
    //currentHead this.head의 데이터라는 뜻
    //현재 해드가 삭제하고자 하는 값을 가지고 있기 때문에 바로 삭제한다.
    //헤드는 이제 새로운값을 갖는다.
    if (currentHead.data == value) {
      this.head = currentHead.next;
      this.size--;
    } else {
      let prev = currentHead;
      while (currentHead.next) {
        if (currentHead.data == value) {
          prev.text = currentHead.next;
          prev = currentHead;
          currentHead = currentHead.next;
          break;
        }
      }
      //삭제하고자 노드가 중간에 없으면 꼬리가 있겠지?
      prev = currentHead;
      currentHead = currentHead.next;
    }
    if (currentHead.data == value) {
      prev.next = null;
    }
    this.size--;
  }
  //검색 : 어떤값이 SLL내에 존재하는지 확인하기 위해서는 모든 next 포인터를 반복순회
  find(value) {
    let currentHead = this.head;
    while (currentHead.next) {
      if (currentHead.data == value) {
        return true;
      }
      currentHead = currentHead.next;
    }
    return false;
  }
  //
  print() {
    let str = "";
    for (let i = this.head; i != null; i = i.next) {
      str += `${i.data}->`;
    }
    str += `Null`;
    console.log(str);
  }
}

let SLL = new singlelinkedList();
SLL.insert(1);
SLL.insert(2);
SLL.insert(3);
SLL.insert(4);
SLL.insert(2);
console.log(SLL.find(2));
console.log(SLL.find(1));
SLL.print();
