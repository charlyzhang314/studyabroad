<?php

return [
    /***公众号开发基本信息***/
    'appid' => 'wx78bd1dc20e3a44f0',
    'app_secret' => '1fd4a58869bb36d3a1e69c3f4a6bad0c',
    /***服务器消息接口配置***/
    // 公众号帐号
    'account' => '',
    'token' => '',
    // 是否开启消息加密（公众号安全模式为兼容模式时此选项才有效，否则根据公众号自身设置决定是否加密）
    'encrypt' => true,
    // EncodingAESKey，未开启消息加密时不必填写
    'ase_key' => '',
    /***其他***/
    // 缓存前缀。请务必确保前缀在项目中的唯一性，防止与项目中其他缓存冲突
    'cache_prefix' => 'wx78bd1dc20e3a44f0',
    // 是否启用SSL证书验证，生产环境下建议开启
    'ssl_verify' => true
];
