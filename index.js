/*사용자에게 숫자를 입력받음
숫자가 문자로 들어오니 다시 숫자로 바꿔서 input에 넣어줌
input을 하나씩 쪼개서 배열에 넣어줌
그리고 그 배열이 원래 내가 가진 배열과 동일한지 확인
숫자만 같으면 볼 숫자와 위치가 모두 동일하면 스트라이크 숫자와 위치가 모두 다르면 아웃
    console.log(input.value);  --> 내가 입력한 숫자
    console.log(typeof input.value); --> string
    console.log(typeof input);  --> object
    console.log(a);
    console.log(typeof a);*/



    
(() => {
    function getRandomInt(min,max) {  //랜덤숫자
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
     }
     
    const answer = arrsolution(1,10);  //랜덤배열을 넣어줄 변수
    //getRandonInt위에 넣는게 아니라 여기 넣는 이유는 arrsolution이 실행되야 getRandomInt가 실행되기 때문
    //즉, arrsolution이 실행되지 않으면 getRandomInt가 실행되지 않음

    function arrsolution(a,b){  //랜덤배열(정답배열)
        let arr = [];
        let sum = 0;
    
        while(sum != 3){
            let num = getRandomInt(a,b);
            
            if(!arr.includes(num)){
                arr.push(num);
                sum++;
            }
        }
        //console.log(arr);
        return arr;
    }
    
    function solution(n){  //입력받은 값 배열로 바꿔주기
        let arr = [];
        for(let i = n ; i > 0 ; i = Math.floor(i/10)){
            arr.push(i%10);
        }
        arr.reverse();
        return arr;
    }
    
    function solsame(arr){
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length; j++){
                if(arr[i] === arr[j] && i !== j){
                    return 0;
                }
            }
        }
        return 1;
    }
    
    function solstrike(arr){  //스트라이크
        let sum = 0;
    
        for(let i = 0; i < arr.length ; i++){
            if(answer[i] === arr[i]){s
                sum++
            }
        }
    
        return sum;
    }
    
    function solball(arr){  //볼
        let sum = 0;
    
        for(let i = 0 ; i < arr.length ; i++){
            for(let j = 0 ; j < answer.length ; j++){
                if(i !== j && arr[i] === answer[j]){
                    sum++;
                }
            }
        }
    
        return sum;
    }

    const input = document.querySelector('input');
    const btn = document.querySelector('button');

    let strike = document.querySelector('#strike');
    let ball = document.querySelector('#ball');
    let out = document.querySelector('#out');

    btn.addEventListener('click',function(){
        //클릭 이라는 이벤트가 발생하면 function을 실행함
        //click이라는 이벤트는 실제로 사용자가 클릭했을 때를 의미
        //한 번 클릭 했을 때 2번 클릭 했을 때 등등으로 나눌 수 있음
        let a = Number(input.value);
    
        
        const arr = solution(a);  //입력받은 배열(숫자로 바꾸기)
        let temp = solsame(arr);
        if(temp === 0){
            alert('중복되는 값이 있으면 안됩니다.');
            return;
        }
              
    
        console.log(answer);
        strike.textContent = solstrike(arr);  //스트라이크
        ball.textContent = solball(arr);    //볼
        out.textContent = 3 - (solstrike(arr) + solball(arr));  //아웃: 3 - (스트라이크 + 볼)
    
    })
})();



