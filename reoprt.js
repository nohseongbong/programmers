// https://programmers.co.kr/learn/courses/30/lessons/92334
// 프로그래머스 lv1 신고결과 받기


function solution(id_list, report, k) {
    const set = [...new Set(report)];
    let subject = []
    let reporters = []
    var answer = [];

    set.map((item) => {
        let a = item.split(' ');
        subject.push(a[1])
        reporters.push(a[0])
    })
    var arr = []

    id_list.map((item) => {
        let obj = { name: item, count: 0, reporter: [] }
        subject.map((x, index) => {
            if (obj.name == x) {
                obj = { ...obj, count: obj.count + 1, reporter: [...obj.reporter, reporters[index]] }
            }
        })
        arr.push(obj)
    })

    id_list.map((x) => {
        let c = 0
        arr.map((i) => {
            if (Math.floor(i.count / k) > 0) {
                i.reporter.map((i2) => {
                    if (x == i2) {
                        c++
                    }
                })
            }
        })
        answer.push(c)
    })
    return answer;
}


let id_list = ["muzi", "frodo", "apeach", "neo"]
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]

console.log(solution(id_list,report,2))