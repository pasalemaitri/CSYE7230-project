import {
  getUserById,
  updateUserPlan,
} from '../../../../../lib/actions/user.actions';

export const GET = async (req: Request, context: { params: { id: string } }) => {
    try {
        const params = await context.params;
        // Then access the id property
        const id = params.id;
      const getUser = await getUserById(id);
  
      if (!getUser) {
        return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
      }
  
      return new Response(JSON.stringify(getUser), { status: 200 });
    } catch (err) {
      console.error("Error fetching user:", err);
      return new Response(JSON.stringify({ message: "Failed to execute" }), { status: 500 });
    }
  };
  
  export const PUT = async (req: Request, context: { params: { id: string } }) => {
    try {
      const { params } = context; // ✅ FIXED
      const id = await params.id;
      const { plan } = await req.json();
  
      if (!plan) {
        return new Response(JSON.stringify({ message: "Plan is required" }), { status: 400 });
      }
  
      const getUser = await getUserById(id);
  
      if (!getUser) {
        return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
      }
  
      const updatedUser = await updateUserPlan(id, plan);
  
      return new Response(JSON.stringify(updatedUser), { status: 200 });
    } catch (err) {
      console.error("Error updating user:", err);
      return new Response(JSON.stringify({ message: "Failed to execute" }), { status: 500 });
    }
  };
  