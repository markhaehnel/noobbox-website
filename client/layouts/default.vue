<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: #2196F3;
}

.box {
  margin-top: 32px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #fff;
  color: #222;
  text-decoration: none;
  padding: 10px 30px 30px 30px;
  background: #fff;
  box-shadow: 0px 12px 16px rgba(0, 0, 0, .2);
}

.button {
  display: block;
  border-radius: 4px;
  color: #222;
  text-decoration: none;
  padding: 10px 30px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, .2);
  margin-top: 16px;
  transition: 0.25s;
}

.button:hover {
  color: #333;
  background-color: #fff;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, .2);
}
</style>
