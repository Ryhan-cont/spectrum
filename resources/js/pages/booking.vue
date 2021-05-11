<template >
    <div class="d-flex justify-center" style="background-color:#f7f7f7">
        <div class="px-6" style="max-width:700px; width:100%; background-color:#FFFFFF">
            <form-wizard color="#3F51B5" title="Booking" subtitle="Please complete all the steps" finishButtonText="Submit" @on-complete="submitBooking()">
                <tab-content title="Required Info" icon="fas fa-address-book">
                    <div style="min-height:300px" v-if="userCatagory == 1 || userCatagory == 3">
                        <v-text-field label="Member Id" ></v-text-field>
                        <v-text-field label="Name" ></v-text-field>
                        <v-text-field label="Mobile" ></v-text-field>
                        <v-text-field label="Email" ></v-text-field>
                    </div>
                    <div style="min-height:300px" v-if="userCatagory == 2">
                        <div>
                            <v-text-field label="Member Id" ></v-text-field>
                            <v-text-field label="Name" ></v-text-field>
                            <v-text-field label="Mobile" ></v-text-field>
                            <v-text-field label="Email" ></v-text-field>
                        </div>
                        <div v-for="index in totalPerson" :key="index">
                            <div class="text-h5 font-weight-bold pt-6 mb-3" style="border-bottom:1px solid rgb(221, 221, 221);">
                                Guest: {{index}}
                            </div>
                            <div>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md6 ><v-text-field class="mx-1" label="Guest Name" ></v-text-field></v-flex>
                                    <v-flex xs12 sm6 md6 ><v-text-field class="mx-1" label="NID"></v-text-field></v-flex>
                                    <v-flex xs12 sm6 md6 ><v-text-field class="mx-1" label="Father/Husband" ></v-text-field></v-flex>
                                    <v-flex xs12 sm6 md6 ><v-text-field class="mx-1" label="Mobile" ></v-text-field></v-flex>
                                    <v-flex xs12 sm6 md6 ><v-text-field class="mx-1" label="Address" ></v-text-field></v-flex>
                                    <v-flex xs12 sm6 md6 ><v-text-field class="mx-1" label="Relation with Member" ></v-text-field></v-flex>
                                    <v-flex xs12 sm6 md6 ><v-select class="mx-1" :items="occupationOption" label="Occupation" ></v-select></v-flex>
                                    <v-flex xs12 sm6 md6 ><v-text-field class="mx-1" label="Occupation short description" ></v-text-field></v-flex>
                                    <v-flex xs12 sm6 md6 ><v-text-field class="mx-1" label="Comes From" ></v-text-field></v-flex>
                                </v-layout>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="py-2">Select Authentication Mode</div>
                        <div class="d-flex">
                            <div>
                                <label class="cc-radio-container">
                                    <div class="d-flex pt-1">
                                        <div class="far fa-envelope-open" style="padding-top:2px"></div>
                                        <div class="pl-2">Email</div>
                                    </div>
                                
                                <input type="radio" name="authMode">
                                <span class="cc-radio-checkmark"></span>
                                </label>
                            </div>
                            <div class="pl-5">
                                <label class="cc-radio-container">
                                <div class="d-flex pt-1">
                                    <div class="far fa-comment" style="padding-top:2px"></div>
                                    <div class="pl-2">SMS</div>
                                </div>
                                <input type="radio" name="authMode">
                                <span class="cc-radio-checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </tab-content>
                <tab-content title="Preview" icon="fas fa-history">
                    <div style="min-height:300px"></div>
                </tab-content>
            </form-wizard>
        </div>

    </div>

</template>
<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
export default {
    components: {
        FormWizard,
        TabContent,
    },
    data(){
        return{
            userCatagory:null,
            roomId:null,
            totalPerson:null,

            occupationOption:['Businessman','Engineer','Doctor'],

            authMode:null,
        }
    },
    mounted(){
        this.userCatagory = this.$route.params.userCat;
        this.roomId = this.$route.params.roomId;
        this.totalPerson = Number(this.$route.params.adult)+Number(this.$route.params.children);
        console.log(this.totalPerson)
    },
    methods:{
        submitBooking(){

        }
    }
}
</script>