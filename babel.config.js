module.exports = (api) => {
  return {
    comments: !api.env("production"), // no comments in production
    presets: [
      [
        "@babel/preset-env",
        {
          targets: ["last 4 chrome versions", "last 4 firefox versions"],
        },
      ],
      "@babel/preset-typescript",
      "@babel/preset-react",
    ],
  };
};
