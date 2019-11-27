<template>
    <div>
        <button v-if="show" @click="request">클릭</button>
        <button @click="makePurchase">완료</button>
        <p v-for="li in list" v-bind:key="li.id">{{li}}</p>
    </div>
</template>
<script>

export default {
    mounted(){
        var self = this;
        this.$socket.on('news', function(data){
            console.log(self.show);
            self.show=data;
        });
        // this.$watch('$data.list', function(){
        //     console.log('wat'+this.list[0].text);
        // }, {
        //     immediate: true,
        //     deep: true
        // })
    },
    data(){
        return {
            show: true,
            list:[
                {id:0, text:'사과'},
                 {id:1, text:'사과'},
                  {id:2, text:'사과'},
            ]
        }
    },
    watch:{
        show: function(newVal, oldVal){
            console.log('watch'+oldVal);
            return newVal;
        }
    },
    methods:{
        request(){
            this.$http.get('http://localhost:3000/temp')
            .then(res=>{
                console.log(res.data);
            })
        },
        makePurchase(){
                
        //         this.$socket.emit('reply', {
        //         purchasedBy: 'me'
        // })
        console.log('소켓 보내기전: '+this.show)
           this.$socket.emit('reply', this.show);
        },
        change(data){
            this.show = data;
        }
    }
}
</script>