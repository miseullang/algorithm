function solution(num_list) {
    return num_list.length <= 10 ?
        num_list.reduce((acc, next) => acc * next)
        : num_list.reduce((acc, next) => acc + next);
}