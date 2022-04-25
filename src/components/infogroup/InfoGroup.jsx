import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function InfoGroup({ data }) {
  const { title, content } = data;
  return (
    <Accordion
      disableGutters={true}
      sx={{
        width: "60%",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: "0px 0px 10px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {content.map((item) => (
          <Accordion
            disableGutters={true}
            sx={{ width: "98%" }}
            key={content.indexOf(item)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.exams.map((exam) => (
                <>
                  <h1>{exam.title}</h1>
                  <h2>{exam.date}</h2>
                </>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
