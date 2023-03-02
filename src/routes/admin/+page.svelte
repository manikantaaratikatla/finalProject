<script>
	import Addtournment from './components/addtournment.svelte';
	import AddStaff from './components/addStaff.svelte';
	import Reports from './components/reports.svelte';
	import EditWinnerList from './components/editWinnerList.svelte';
	import AddWinner from './components/addWinner.svelte';
	import EditTournament from './components/editTournament.svelte';
	import Dashboard from './components/dashboard.svelte';
	let selectedTab = 0;
	// @ts-ignore
	function setTab(x) {
		selectedTab = x;
	}
</script>

<div class="flex flex-row ">
	<aside
		id="sidebar"
		class="flex felx-col  bg-blue-200 pt-[185px] h-[100vh] min-w-[300px] max-w-[300px]"
		aria-label="Sidebar"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->

		<div class=" p-3 w-[100%]  divide-y space-y-1 ">
			<ul class="space-y-2 pb-2">
				<li
					on:click={() => {
						setTab(0);
					}}
					class="text-base cursor-pointer text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
				>
					<span class="ml-3 flex-1 whitespace-nowrap">Dashboard</span>
				</li>
				<li
					on:click={() => {
						setTab(1);
					}}
					class="text-base cursor-pointer text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
				>
					<span class="ml-3 flex-1 whitespace-nowrap">Add Tournament</span>
				</li>
				<li
					on:click={() => {
						setTab(2);
					}}
					class="text-base cursor-pointer text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
				>
					<span class="ml-3 flex-1 whitespace-nowrap">Edit Tournament</span>
				</li>
				<li
					on:click={() => {
						setTab(3);
					}}
					class="text-base cursor-pointer text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
				>
					<span class="ml-3 flex-1 whitespace-nowrap">Add Winner</span>
				</li>
				<li
					on:click={() => {
						setTab(4);
					}}
					class="text-base cursor-pointer text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
				>
					<span class="ml-3 flex-1 whitespace-nowrap">Edit winner list </span>
				</li>
				<li
					on:click={() => {
						setTab(5);
					}}
					class="text-base cursor-pointer text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
				>
					<span class="ml-3 flex-1 whitespace-nowrap">Add Staff</span>
				</li>
				<li
					on:click={() => {
						setTab(6);
					}}
					class="text-base cursor-pointer text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
				>
					<span class="ml-3 flex-1 whitespace-nowrap">Reports</span>
				</li>
			</ul>
		</div>
	</aside>
	{#if selectedTab == 0}
		<Dashboard />{/if}
	{#if selectedTab == 1}
		<Addtournment />{/if}
	{#if selectedTab == 2}
		<EditTournament />{/if}
	{#if selectedTab == 3}
		<AddWinner />{/if}
	{#if selectedTab == 4}
		<EditWinnerList />{/if}
	{#if selectedTab == 5}
		<AddStaff />{/if}
	{#if selectedTab == 6}
		<Reports />{/if}
</div>
