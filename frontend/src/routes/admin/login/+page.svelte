<script>
import {onMount} from "svelte"
let {data}=$props()
import { role } from "$lib/role.js";
role.set(data.user.role)
console.log(data.user)
</script>
<div>Welcome {data.user.staffName}</div>
<div>Role: {data.user.role}</div>