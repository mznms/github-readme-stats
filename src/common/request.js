import core from "@actions/core";
import rax from "retry-axios";
import axios from "axios";

rax.attach();

/**
 * get request
 *
 * @param {*} header header
 * @param {*} data data
 * @returns {AxiosPromise<*>} axios
 */
export default function request(header, data) {
  return axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers: header,
    data,
    raxConfig: {
      retry: 10,
      noResponseRetries: 3,
      retryDelay: 1000,
      backoffType: "linear",
      httpMethodsToRetry: ["POST"],
      onRetryAttempt: (err) => {
        const cfg = rax.getConfig(err);
        core.warning(err);
        core.warning(`Retry attempt #${cfg?.currentRetryAttempt}`);
      },
    },
  });
}
