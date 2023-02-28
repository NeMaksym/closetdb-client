import { Grid } from "@mui/material";

interface TwoColumnLayoutProps {
  leftColumnContent: React.ReactNode;
  rightColumnContent: React.ReactNode;
}

export const TwoColumnLayout = ({
  leftColumnContent,
  rightColumnContent
}: TwoColumnLayoutProps) => (
  <Grid container spacing={0} style={{ margin: "32px" }}>
    <Grid item xs={6} style={{ paddingRight: "16px" }}>
      {leftColumnContent}
    </Grid>
    <Grid item xs={6} style={{ paddingLeft: "16px" }}>
      {rightColumnContent}
    </Grid>
  </Grid>
);
