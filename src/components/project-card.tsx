import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <Card 
      placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
      color="transparent" shadow={false}>
      <CardHeader 
        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody 
        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
             variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography 
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
          className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Button 
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}

          color="gray" size="sm">
          see details
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
