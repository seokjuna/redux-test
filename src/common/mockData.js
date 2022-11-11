const friends = [ 
    { name: "쯔위", age: 15 },
    { name: "수지", age: 20 },
    { name: "아이유", age: 25 },
    { name: "손나은", age: 30 }
];
const timelines = [
    { desc: "리덕스 공부 중", likes: 0 },
    { desc: "대학 졸업했다", likes: 0 },
    { desc: "햄버거를 먹었다", likes: 0 },
    { desc: "치과에 다녀왔다", likes: 0 }
]; 

function makeDataGenerator(items) {
    let itemIndex = 0;
    return function getNextData() {
        const item = items[itemIndex % items.length];
        itemIndex += 1;
        return { ...item, id: itemIndex }
    };
}
export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);