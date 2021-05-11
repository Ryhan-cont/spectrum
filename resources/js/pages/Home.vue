<template >
<div style="height:100%; width:100%">
    <div class="d-flex justify-center align-center w100" style="height:100%; width:100%" v-if="searched">
        <div class="pa-3 cc-full-page-inp-container">
            <div class="px-4 py-3 text-h5">
                <div class="font-weight-bold font-italic">Find the right hotel in right time</div>
                <div style="font-size:12px; color:#8f8f8f">Some instruction should go here.</div>
            </div>
            <div class="d-flex pa-3">
                <div class="mx-1 px-2 py-2 flex-grow-1 input-border" style="background-color:#FFFFFF">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                                <div class="px-1" style="height:100%" v-bind="attrs" v-on="on">
                                    <div class="font-weight-bold text-button">User Category</div>
                                    <div>{{userCatagory}}</div>
                                </div>
                        </template>
                        <v-card>
                            <v-list>
                                <v-list-item v-for="item in userCatagoryList" :key="item.id" link @click="selectedUserCat(item)">
                                    <v-list-item-title v-text="item.title"></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-menu>
                </div>
                <div class="mx-1 px-2 py-2 input-border" style="background-color:#FFFFFF">
                    <v-date-picker v-model="dateRange" is-range :masks="{input: 'DD-MM-YYYY'}" color="purple" :min-date="new Date()">
                        <template v-slot="{ inputValue, inputEvents }">
                            <div v-on="inputEvents.start" class="d-flex">
                                <div class="px-1">
                                    <div class="font-weight-bold text-button" style="width:90px">Check in</div>
                                    <div>{{inputValue.start}}</div>
                                </div>
                                <div class="px-1">
                                    <div class="font-weight-bold text-button" style="width:90px">Check Out</div>
                                    <div>{{inputValue.end}}</div>
                                </div>
                            </div>
                        </template>
                    </v-date-picker>
                </div>
                <div style="background-color:#FFFFFF" class="mx-1 py-2 px-2 input-border">
                    <v-menu :close-on-content-click="false" transition="slide-x-transition" top left :nudge-width="100" offset-x>
                        <template v-slot:activator="{ on, attrsx }">
                            <div class="d-flex pt-3 text-h6" style="width:230px;cursor: pointer;" v-bind="attrsx" v-on="on">
                                <div class="px-1">{{adult}} Adult</div>
                                <div class="px-1">{{children}} Children</div>
                                <div class="px-1">{{room}} Room</div>
                            </div>
                        </template>
                        <v-card>
                            <div class="pa-3">
                                <div class="d-flex">
                                    <div class="flex-grow-1 text-button pt-1">Adult</div>
                                    <div class="fas fa-plus pa-3 cc-pn-icon-cont" @click="adult++"></div>
                                    <div class="px-3 pt-2">{{adult}}</div>
                                    <div class="fas fa-minus pa-3 cc-pn-icon-cont" @click="adult == 0 ? adult = 0 :adult--"></div>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-grow-1 text-button pt-1">Children</div>
                                    <div class="fas fa-plus pa-3 cc-pn-icon-cont" @click="children++"></div>
                                    <div class="px-3 pt-2">{{children}}</div>
                                    <div class="fas fa-minus pa-3 cc-pn-icon-cont" @click="children == 0 ? children = 0 :children--"></div>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-grow-1 text-button pt-1">Room</div>
                                    <div class="fas fa-plus pa-3 cc-pn-icon-cont" @click="room++"></div>
                                    <div class="px-3 pt-2">{{room}}</div>
                                    <div class="fas fa-minus pa-3 cc-pn-icon-cont" @click="room == 0 ? room = 0 :room--"></div>
                                </div>
                            </div>
                        </v-card>
                    </v-menu>
                </div>
                <div class="mx-1 py-2" style="padding-top:2px;"><v-btn depressed color="indigo" dark x-large  @click="searchData()">Search</v-btn></div>
            </div>
        </div>
    </div>
    <div class="d-flex justify-center"  v-else>
        <div class="d-flex" style="max-width:1200px; width:100%">
            <div class="cc-searched-left-box">
                <div class="pa-2" style="background-color:#f7f7f7">
                    <div class="pa-3 text-h6 font-weight-bold">Find Hotel</div>
                    <div class="mx-1 my-2 px-2 flex-grow-1 input-border" style="background-color:#FFFFFF">
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                    <div class="px-1 py-2" style="height:100%; min-height:70px" v-bind="attrs" v-on="on">
                                        <div class="font-weight-bold text-button">User Category</div>
                                        <div>{{userCatagory}}</div>
                                    </div>
                            </template>
                            <v-card>
                                <v-list>
                                    <v-list-item v-for="item in userCatagoryList" :key="item.id" link @click="selectedUserCat(item)">
                                        <v-list-item-title v-text="item.title"></v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-menu>
                    </div>
                    <div class="mx-1 ma-2 px-2 input-border" style="background-color:#FFFFFF">
                        <v-date-picker v-model="dateRange" is-range :masks="{input: 'DD-MM-YYYY'}" color="purple" :min-date="new Date()">
                            <template v-slot="{ inputValue, inputEvents }">
                                <div v-on="inputEvents.start" class="d-flex py-2">
                                    <div class="px-1">
                                        <div class="font-weight-bold text-button" style="width:90px">Check in</div>
                                        <div>{{inputValue.start}}</div>
                                    </div>
                                    <div class="px-1">
                                        <div class="font-weight-bold text-button" style="width:90px">Check Out</div>
                                        <div>{{inputValue.end}}</div>
                                    </div>
                                </div>
                            </template>
                        </v-date-picker>
                    </div>
                    <div style="background-color:#FFFFFF" class="mx-1 px-2 input-border">
                        <v-menu :close-on-content-click="false" transition="slide-x-transition" top left :nudge-width="100" offset-x>
                            <template v-slot:activator="{ on, attrsx }">
                                <div class="d-flex pt-4 text-h6" style="width:230px; cursor: pointer; min-height:60px" v-bind="attrsx" v-on="on">
                                    <div class="px-1">{{adult}} Adult</div>
                                    <div class="px-1">{{children}} Children</div>
                                    <div class="px-1">{{room}} Room</div>
                                </div>
                            </template>
                            <v-card>
                                <div class="pa-3">
                                    <div class="d-flex">
                                        <div class="flex-grow-1 text-button pt-1">Adult</div>
                                        <div class="fas fa-plus pa-3 cc-pn-icon-cont" @click="adult++"></div>
                                        <div class="px-3 pt-2">{{adult}}</div>
                                        <div class="fas fa-minus pa-3 cc-pn-icon-cont" @click="adult == 0 ? adult = 0 :adult--"></div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-grow-1 text-button pt-1">Children</div>
                                        <div class="fas fa-plus pa-3 cc-pn-icon-cont" @click="children++"></div>
                                        <div class="px-3 pt-2">{{children}}</div>
                                        <div class="fas fa-minus pa-3 cc-pn-icon-cont" @click="children == 0 ? children = 0 :children--"></div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="flex-grow-1 text-button pt-1">Room</div>
                                        <div class="fas fa-plus pa-3 cc-pn-icon-cont" @click="room++"></div>
                                        <div class="px-3 pt-2">{{room}}</div>
                                        <div class="fas fa-minus pa-3 cc-pn-icon-cont" @click="room == 0 ? room = 0 :room--"></div>
                                    </div>
                                </div>
                            </v-card>
                        </v-menu>
                    </div>
                    <div class="mx-1 my-3" style="padding-top:2px;" @click="searchData()"><v-btn depressed color="indigo" dark block>Search</v-btn></div>
                </div>
            </div>
            <div class="cc-searched-right-box pl-6 pr-4">

                <div class="d-flex pa-3 cc-preview-item-cont mb-3" v-for="(item,index) in roomItems" :key="index">
                    <div style="flex:4">
                        <img :src="item.image" style="width:100%">
                    </div>
                    <div style="flex:5" class="px-3">
                        <div class="d-flex" style="flex-direction:column; width:100%; height:100%">
                            <div style="flex:1">
                                <div class="text-h5 font-weight-bold" style="color:#3F51B5">{{item.title}}</div>
                                <div class="py-2">{{item.address}}</div>
                                <div class="font-weight-light font-italic" style="color:#919191">{{item.description}}</div>

                            </div>
                            <div class="d-flex py-2" style="color:#4f4f4f">
                                <div style="flex:1">
                                    <div><b>Number of beds:</b> {{item.night}}</div>
                                    <div><b>Night:</b> {{item.night}}</div>
                                </div>
                                <div align="right">
                                    <div><b>Total ammount:</b> {{item.cost}}</div>
                                    <div><b>+ vat:</b> {{item.tax}}</div>
                                    <div class="pt-2"><v-btn depressed color="indigo" dark @click="$router.push(item.bookingUrl)">Send request for booking</v-btn></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import moment from 'moment';
export default {
    data(){
        return{
            userCatagoryList:[
                {title:'For Member', id:1},{title: 'For Member’s Guest',id:2},{title: 'For General', id:3}
            ],
            userCatagory:null,
            usercatagiryId:null,
            dateRange: {
                start: new Date(),
                end: new Date(),
            },
            adult:2,
            children:0,
            room:1,

            searched:true,
            roomItems:[],
        }
    },
    methods:{
        selectedUserCat(item){
            this.userCatagory = item.title;
            this.usercatagiryId = item.id;
        },
        searchData(){
            if(this.usercatagiryId == null){
                ale.fire({title: 'Please select user catagory.'})
            }else{
                //api searched will done here
                this.searched = false;

                var startDate = moment(this.dateRange.start); 
                var endDate = moment(this.dateRange.end);
                var duration = moment.duration(endDate.diff(startDate))
                var days = duration.asDays();

                //Room item from api
                this.roomItems = [
                    {
                        title:'Double AC Deluxe',
                        night:days,
                        cost:2400*days,
                        tax:2400*days*.2,
                        image:'https://i.imgur.com/yefs09w.png',
                        description:`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                        address:'Address will go here',
                        bookingUrl:`/booking/${this.usercatagiryId}/0/${this.adult}/${this.children}`
                    },
                    {
                        title:'Super Duplex-2',
                        night:days,
                        cost:3500*days,
                        tax:3500*days*.2,
                        image:'https://i.imgur.com/ePRrBeI.png',
                        description:`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
                        address:'Address will go here',
                        bookingUrl:`/booking/${this.usercatagiryId}/1/${this.adult}/${this.children}`
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
    .cc-pn-icon-cont{
        border:1px solid rgb(241, 241, 241);
        cursor: pointer;
    }
    .cc-full-page-inp-container{
        max-width:900px; 
        width:100%; 
        background-color:#FFFFFF;
        box-shadow:0px 0px 5px 0px rgb(0,0,0,0.1);
        border-radius: 5px;
        border:1px solid rgb(238, 238, 238);
    }

    .cc-searched-left-box{
        width:300px;
    }
    .cc-searched-right-box{
        flex:auto;
    }
    .input-border{
        border:1px solid rgb(226, 226, 226);
    }
    .cc-preview-item-cont{
        background-color: #FFFFFF;
        border:1px solid rgb(221, 221, 221);
    }
</style>