import { Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "@mui/material/Link";
const SocialLinksHeader = () => {
  return (
    <Grid
      padding="16px"
      direction="row"
      justifyContent="right"
      alignItems="center"
      container
      spacing={2}
    >
      <Grid item xs={2} md={1}>
        <Link
          href="https://instagram.com/mr.options_seller?igshid=YmMyMTA2M2Y="
          color="inherit"
          target="_blank"
        >
          <InstagramIcon />
        </Link>
      </Grid>
      <Grid item xs={2} md={1}>
        <Link
          href="https://youtube.com/@Mr.options_seller"
          color="inherit"
          target="_blank"
        >
          <YouTubeIcon />
        </Link>
      </Grid>
      <Grid item xs={2} md={1}>
        <Link
          href="https://t.me/+3XLetKrvnK85NDVl"
          color="inherit"
          target="_blank"
        >
          <TelegramIcon />
        </Link>
      </Grid>
    </Grid>
  );
};

export default SocialLinksHeader;
