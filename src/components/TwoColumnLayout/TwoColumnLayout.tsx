import Grid from "@mui/material/Unstable_Grid2";
interface TwoColumnLayoutProps {
  leftColumnContent: React.ReactNode;
  rightColumnContent: React.ReactNode;
}

export const TwoColumnLayout = ({
  leftColumnContent,
  rightColumnContent
}: TwoColumnLayoutProps) => (
  <Grid container spacing={4} ml={2} mr={2}>
    <Grid xs={6}>{leftColumnContent}</Grid>
    <Grid xs={6}>{rightColumnContent}</Grid>
  </Grid>
);
