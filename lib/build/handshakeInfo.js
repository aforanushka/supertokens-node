"use strict";
var __awaiter =
    (this && this.__awaiter) ||
    function(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : new P(function(resolve) {
                          resolve(result.value);
                      }).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
Object.defineProperty(exports, "__esModule", { value: true });
const querier_1 = require("./querier");
class HandshakeInfo {
    constructor(jwtSigningPublicKey, cookieDomain, cookieSecure, accessTokenPath, refreshTokenPath) {
        this.updateJwtSigningPublicKey = newKey => {
            this.jwtSigningPublicKey = newKey;
        };
        this.jwtSigningPublicKey = jwtSigningPublicKey;
        this.cookieDomain = cookieDomain;
        this.cookieSecure = cookieSecure;
        this.accessTokenPath = accessTokenPath;
        this.refreshTokenPath = refreshTokenPath;
    }
    // @throws GENERAL_ERROR
    static getInstance() {
        return __awaiter(this, void 0, void 0, function*() {
            if (HandshakeInfo.instance == undefined) {
                let response = yield querier_1.Querier.getInstance().sendPostRequest("/handshake", {});
                HandshakeInfo.instance = new HandshakeInfo(
                    response.jwtSigningPublicKey,
                    response.cookieDomain,
                    response.cookieSecure,
                    response.accessTokenPath,
                    response.refreshTokenPath
                );
            }
            return HandshakeInfo.instance;
        });
    }
}
exports.HandshakeInfo = HandshakeInfo;
//# sourceMappingURL=handshakeInfo.js.map