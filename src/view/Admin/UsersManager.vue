<script setup>
import { reactive, ref } from 'vue';
// import AdminLayout from '../../layouts/AdminLayout.vue';
import useUsers from '../../store/users'

const store = useUsers()
let users = ref([])

async function onMounted(){
 const data = await store.getAll();
 users.value = data;
console.log(users.value);
}
onMounted();


async function handleChangeStatus(user){
    console.log(user);
    const data = await store.update(user);
    console.log(data)
    onMounted();
}
</script>

<template>
    <div>
        <!-- <AdminLayout></AdminLayout> -->
        
        <article>
            <h3 class="font-medium text-[26px]">Users in website</h3>
            <hr/>
            <div class="bg-white rounded-lg px-4 py-5">
                <table class="table-auto border-collapse">
                <thead>
                    <tr>
                    <th class="px-10 py-2">#</th>
                    <th class="px-10 py-2">Name</th>
                    <th class="px-10 py-2">Phone number</th>
                    <th class="px-10 py-2">Email</th>
                    <th class="px-10 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) of users" :key="user.id" >
                        <td class="px-10 py-2">{{ index + 1 }}</td>
                        <td class="px-10 py-2">{{ user.name }}</td>
                        <td class="px-10 py-2">{{ user.phone }}</td>
                        <td class="px-10 py-2">{{ user.email }}</td>
                        <td class="px-10 py-2"><input type="checkbox" @change="handleChangeStatus(user)" v-model="user.status"/></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </article>
    </div>
</template>
