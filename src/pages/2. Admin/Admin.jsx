const Admin = () => {
  return (
    <main className="flex">
      <div className="bg-white shadow-2xl m-[20px] w-[400px] h-[550px] rounded-[10px]">
        <form id="create_account" className="flex flex-col" onSubmit={() => false}>
          <h1 className="text-center text-[30px] font-semibold m-[20px]">Create Account</h1>
          
          <label htmlFor="name" className="ml-[20px] mr-[20px] mb-[10px] text-[20px]">Name</label>
          <input type="text" id="name_input" className="border mx-[20px] text-[25px] px-[10px] py-[5px] rounded-[5px]" placeholder="Enter Name" />

          <label className="ml-[20px] mr-[20px] mb-[10px] mt-[20px] text-[20px]">Email</label>
          <input type="text" id="email_input" className="border mx-[20px] text-[25px] px-[10px] py-[5px] rounded-[5px]" placeholder="Enter Valid Email" />
        
          <label className="ml-[20px] mr-[20px] mb-[10px] mt-[20px] text-[20px]">Role</label>
          <select id="role_selected" className="ml-[20px] mr-[20px] mb-[10px] border text-[25px] p-[5px] rounded-[5px]">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <button id="bttn" type="submit" className="bg-blue-500 text-[20px] text-white font-bold mx-[20px] my-[40px] p-[10px] rounded-[5px]">Create Account</button>
        </form>
      </div>

      <div className="bg-white shadow-2xl m-[20px] w-[1030px] rounded-[10px]">
        <h1 className="text-center text-[30px] font-semibold m-[20px]">Manage Account</h1>
        <table className="w-[1030px] table-fixed m-[10px] text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th >Actions</th>
            </tr>
          </thead>
          
          <tbody id="manage_account">
            {/* Populate account data here */}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Admin;
