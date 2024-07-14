import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <Card 
      placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
      color="transparent" shadow={false}>
      <CardBody 
        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <Typography 
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
          variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography 
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
          className="px-8 font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;