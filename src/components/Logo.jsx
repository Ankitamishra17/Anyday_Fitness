import { Link } from "react-router-dom";
// import { Dumbbell } from "lucide-react";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0 group">
    
 <div>
  <img src ="/logo1.png" alt="logo" className="h-20 w-42 sm:h-15 sm:w-45 lg:h-24 lg:w-30 object-center object-cover" />
 
 </div>
      
    </Link>
  );
}
