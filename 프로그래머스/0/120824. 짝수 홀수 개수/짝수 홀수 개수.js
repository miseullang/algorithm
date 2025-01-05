function solution(num_list) {
    let odd = 0;
    let even = 0;
    num_list.forEach(n => n % 2 ? odd++ : even++);
    return [even, odd];
}