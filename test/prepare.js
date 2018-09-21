const prepare = require("mocha-prepare");
const Kermit = require("kermit-pptr");

prepare(
  async function(done) {
    const { NODE_ENV } = process.env;

    const isShow = !NODE_ENV;
    const isSlow = NODE_ENV === "test:slow";
    const slow = isSlow ? 100 : 0;

    global.kermit = await new Kermit({
      headless: isShow,
      slowMo: slow
    });
    done();
  },
  async function(done) {
    await kermit.close();
    done();
  }
);
