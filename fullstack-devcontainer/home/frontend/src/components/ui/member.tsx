import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";

interface MemberProps {
  name: string;
  description: string;
}

const Member = ({ name, description }: MemberProps) => {
  return (
    <div className="flex justify-center mt-8">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="w-80 max-w-full" 
      >
        <Card className="p-4">
          <CardHeader>
            <CardTitle>{name}</CardTitle>
          </CardHeader>
          <CardContent>{description}</CardContent>
          <CardFooter>Donate to BSE!</CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default Member;