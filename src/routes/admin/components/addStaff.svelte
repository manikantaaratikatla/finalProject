<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-[185px] w-half">
	<div class="w-full max-w-md px-6 py-8 bg-white shadow-md rounded-md">
		<h2 class="text-2xl font-bold mb-4">Add Staff</h2>
		<form class="space-y-4">
			<div class="mb-4">
				<label class="block text-gray-700 font-bold mb-2" for="sport"> Role </label>
				<select
					class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					id="sport"
				>
					<option>Select a role</option>
					<option>Admin</option>
					<option>Staff</option>
				</select>
			</div>
			<div>
				<label class="block font-semibold mb-2" for="name">Name</label>
				<input
					class="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
					type="text"
					id="name"
					name="name"
					required
				/>
			</div>
			<div>
				<label class="block font-semibold mb-2" for="email">Email</label>
				<input
					class="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
					type="email"
					id="email"
					name="email"
					required
				/>
			</div>
			<div>
				<label class="block font-semibold mb-2" for="password">Password</label>
				<input
					class="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
					type="password"
					id="password"
					name="password"
					required
				/>
			</div>
			<div>
				<label class="block font-semibold mb-2" for="confirm_password">Confirm Password</label>
				<input
					class="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
					type="password"
					id="confirm_password"
					name="confirm_password"
					required
				/>
			</div>
			<div>
				<button
					class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit">Add Staff</button
				>
			</div>
		</form>
	</div>
</div>
<div class="pt-[185px]">
	<table class="table-auto w-full">
		<thead>
			<tr class="bg-gray-200 text-gray-700">
				<th class="p-2 border border-gray-500">Username</th>
				<th class="p-2 border border-gray-500">Password</th>
				<th class="p-2 border border-gray-500">Role</th>
				<th class="p-2 border border-gray-500">Actions</th>
			</tr>
		</thead>
		<tbody>
			<tr class="border-b border-gray-300">
				<td class="p-2 border border-gray-500">Sasikumar</td>
				<td class="p-2 border border-gray-500">********</td>
				<td class="p-2 border border-gray-500">User</td>
				<td class="p-2 border border-gray-500">
					<a href="#" class="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-700">Edit</a>
					<a href="#" class="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700">Delete</a>
				</td>
			</tr>
			<tr class="border-b border-gray-300">
				<td class="p-2 border border-gray-500">Sasikumar</td>
				<td class="p-2 border border-gray-500">********</td>
				<td class="p-2 border border-gray-500">User</td>
				<td class="p-2 border border-gray-500">
					<a href="#" class="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-700">Edit</a>
					<a href="#" class="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700">Delete</a>
				</td>
			</tr>
			<tr class="border-b border-gray-300">
				<td class="p-2 border border-gray-500">Sasikumar</td>
				<td class="p-2 border border-gray-500">********</td>
				<td class="p-2 border border-gray-500">User</td>
				<td class="p-2 border border-gray-500">
					<a href="#" class="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-700">Edit</a>
					<a href="#" class="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700">Delete</a>
				</td>
			</tr>
			<tr class="border-b border-gray-300">
				<td class="p-2 border border-gray-500">Sasikumar</td>
				<td class="p-2 border border-gray-500">********</td>
				<td class="p-2 border border-gray-500">User</td>
				<td class="p-2 border border-gray-500">
					<a href="#" class="px-2 py-1 text-white bg-green-500 rounded hover:bg-green-700">Edit</a>
					<a href="#" class="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700">Delete</a>
				</td>
			</tr>
			<!-- add more rows here as needed -->
		</tbody>
	</table>
</div>
