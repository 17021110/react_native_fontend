//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen4 from './Screen4';
import Screen3 from './Screen3';
import Screen5 from './Screen5';
import * as React from 'react';
import Menu from './Menu';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Menu1() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Trang chủ" component={Menu} />
            <Drawer.Screen name="Quy đổi tiền" component={Screen2} />
            <Drawer.Screen name="Thông tin tài khoản" component={Screen3} />
            <Drawer.Screen name="Đăng nhập" component={Screen4} />
            <Drawer.Screen name="Đăng kí tài khoản mới" component={Screen5} />
        </Drawer.Navigator>
    );
}
export default Menu1;