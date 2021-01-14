var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'極簡約素色白T',
            imgUrl:'https://github.com/owen4096/wp108b/blob/master/ws109a/public/1.png?raw=true',
            price:'500',
            count:'1'
          },
          {
            id:'2',
            itemName:'純手工短袖黑T',
            imgUrl:'https://github.com/owen4096/wp108b/blob/master/ws109a/public/2.png',
            price:'790',
            count:'1'
          },
          {
            id:'3',
            itemName:'超時尚牛仔庫',
            imgUrl:'https://github.com/owen4096/wp108b/blob/master/ws109a/public/3.png',
            price:'1200',
            count:'1'
          },
          {
            id:'4',
            itemName:'質感褐色系短褲',
            imgUrl:'https://github.com/owen4096/wp108b/blob/master/ws109a/public/4.png',
            price:'2300',
            count:'1'
          },
    ]
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>1){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }
    },
    computed:{

    }
})