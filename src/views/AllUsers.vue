<template>
    <div id="all-users">
        <router-link v-for="user in getUsers" :key="user.id"
        :to="{ name: 'UserProfile', params: { id: user.id }}"> 
            <div class="user container-white" >
                <div class="user-info" v-if="user.name != '[Loading]'">
                    <div style="display: flex; align-items: center;">
                        <div>
                            <img class="user-photo" :src="user.image" width="48" height="48">
                        </div>
                        <div class="user-name-and-status">
                            <router-link 
                            class="link-user"
                            :class="{ 'is-admin-name': user.isAdmin }"
                            :to="{ name: 'UserProfile', params: { id: user.id }}"> 
                            {{ user.name }} {{ user.lastName }}
                            </router-link>
                        </div>
                    </div>
                </div>
                <LoadingSmall v-else />
            </div>
        </router-link>
    </div>
</template>

<script>
import LoadingSmall from '../components/LoadingSmall'

export default {
    components: {
        LoadingSmall
    },
    computed: {
        getUsers() {
            return this.$store.getters.getUserList.concat().sort((u, u2) => u2.isAdmin - u.isAdmin)
        }
    },
    async created() {
        await this.$store.dispatch('loadAllUserInfos')
    }
}
</script>

<style scoped>
a {
    color: blue;
}

.is-admin-name{
    color: rgb(206, 33, 33);
}

.user {
    margin-bottom: 1rem;
}

.user-photo {
    border-radius: 25px;
    margin: 8px 8px 4px 8px;
}
</style>