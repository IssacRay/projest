/*
Navicat MySQL Data Transfer

Source Server         : goujiuwang
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : gjw

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-10 17:51:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for mygoods
-- ----------------------------
DROP TABLE IF EXISTS `mygoods`;
CREATE TABLE `mygoods` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(200) NOT NULL,
  `youhui` varchar(200) DEFAULT NULL,
  `price` varchar(10) NOT NULL,
  `img` varchar(300) NOT NULL,
  `old_price` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mygoods
-- ----------------------------
INSERT INTO `mygoods` VALUES ('1', '法国 拉菲 奥希耶红 干红葡萄酒 750ml', ' ', ' 69', '../img/goods1_1.jpg', '326');
INSERT INTO `mygoods` VALUES ('2', '【整箱装】法国 拉菲 传奇波尔多 AOC级干红葡萄酒 750ml*6瓶', ' ', '379', '../img/goods2_1.jpg', '1398');
INSERT INTO `mygoods` VALUES ('3', '【整箱装】法国 拉菲 传说波尔多 AOC级干红葡萄酒 750ml*6瓶', '霸气直降 超乎想象', '369', '../img/goods3_1.jpg', '1368');
INSERT INTO `mygoods` VALUES ('4', '【整箱装】法国 拉菲 珍藏波尔多 干红葡萄酒750ml*6瓶', ' 拉菲出品 珍藏品质', '459', '../img/goods4_1.jpg', '709');
INSERT INTO `mygoods` VALUES ('5', '法国 拉菲传奇 圣爱美乐 红葡萄酒 750ml', ' ', '568', '../img/goods5_1.jpg', '699');
INSERT INTO `mygoods` VALUES ('6', '智利 拉菲凯洛 红葡萄酒 2010 750ml', ' ', '647', '../img/goods6_1.jpg', '799');
INSERT INTO `mygoods` VALUES ('7', '法国 拉菲 奥希耶西慕 干红葡萄酒 750ml', '满299返150元券 (内含100减20 200减30 399减50 399减50） 确认收货后解冻', '109', '../img/goods7_1.jpg', '528');
INSERT INTO `mygoods` VALUES ('8', '智利 拉菲 珍藏级华诗歌 干红葡萄酒 2013年 750ml', '', '159', '../img/goods8_1.jpg', '398');
INSERT INTO `mygoods` VALUES ('9', '法国 拉菲 奥希耶古堡 干红葡萄酒 750ml', ' ', '268', '../img/goods9_1.jpg', '990');
INSERT INTO `mygoods` VALUES ('10', '法国 拉菲 奥希耶徽纹 干红葡萄酒 750ml', '年份随机发货 买一送二 （送1瓶原品+1瓶奥希耶西慕）', '298', '../img/goods10_1.jpg', '1208');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `psw` varchar(30) NOT NULL,
  `tellphone` varchar(16) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'Ray', 'forling', '13000000000', 'Ray@ling.com');
INSERT INTO `users` VALUES ('2', '123123@df.com', '123456', '13112345678', '123123@df.com');
INSERT INTO `users` VALUES ('9', 'sdsad@qq.com', '123456', '13212345678', 'sdsad@qq.com');
INSERT INTO `users` VALUES ('18', 'haha@qq.com', '123456', '13212345678', 'haha@qq.com');
INSERT INTO `users` VALUES ('19', '13111111111', '123456', '13111111111', '');
INSERT INTO `users` VALUES ('10', 'sdsad@qq.com', '123456', '13212345678', 'sdsad@qq.com');
INSERT INTO `users` VALUES ('11', 'sdsad@qq.com', '123456', '13212345678', 'sdsad@qq.com');
INSERT INTO `users` VALUES ('12', 'sdsad@qq.com', '123456', '13212345678', 'sdsad@qq.com');
INSERT INTO `users` VALUES ('13', 'sdsad@qq.com', '123456', '13212345678', 'sdsad@qq.com');
INSERT INTO `users` VALUES ('14', 'sdsad@qq.com', '123456', '13212345678', 'sdsad@qq.com');
INSERT INTO `users` VALUES ('15', 'sdsad@qq.com', '123456', '13212345678', 'sdsad@qq.com');
INSERT INTO `users` VALUES ('16', 'sdsad@qq.com', '111111', '13211111111', 'sdsad@qq.com');
INSERT INTO `users` VALUES ('17', 'qwe@qq.com', '111111', '13111111111', 'qwe@qq.com');
SET FOREIGN_KEY_CHECKS=1;
