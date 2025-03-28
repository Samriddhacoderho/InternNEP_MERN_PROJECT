import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
 const InternshipCard=(props)=> {
    return (
      <Card className="mt-6 w-96 h-80">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={props.internshipImage}
            height="20px"
            alt="https://cdn.britannica.com/70/2970-050-796F522C/Flag-Nepal.jpg"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {props.internshipTitle}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button> <a href={props.internshipLink} target="_blank">Read More</a></Button>
        </CardFooter>
      </Card>
    );
  }

export default InternshipCard