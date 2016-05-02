import webpack from "webpack";
import config from "../webpack.config.dev";

process.env.NODE_ENV = "development"; // this assures React is built in prod mode and that the Babel dev config doesn"t apply.

webpack(config).run((err, stats) => {
  if (err) { // so a fatal error occurred. Stop here.
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log("Webpack generated the following warnings: ".bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  // console.log(`Webpack stats: ${stats}`);
  // if we got this far, the build succeeded.
  console.log("Your app has been compiled in production mode and written to /dist. It\"s ready to roll!");

  return 0;
});
