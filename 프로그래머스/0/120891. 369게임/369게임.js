function solution(order) {
    return order.toString().replace(/[0,1,2,4,5,7,8]/g, '').length;
}