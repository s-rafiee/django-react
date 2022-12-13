import React from 'react';
import './DashboardLayout.css';
import {FaRegUser, FaArrowAltCircleRight} from 'react-icons/fa';

export default function DashboardLayout({children}) {
    return <>
        <div className="navbar dsh-sidebar">
            <ul className="nav">
                <li className="nav-item active">
                    <a href="#" className="nav-link">
                        <i>
                            <FaRegUser/>
                        </i>
                        <span className="menu-title">Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i>
                            <FaRegUser/>
                        </i>
                        <span className="menu-title">Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed"
                       data-toggle="collapse"
                       href="#ui-basic"
                       aria-expanded="false"
                       aria-controls="ui-basic">
                        <i>
                            <FaRegUser/>
                        </i>
                        <span
                            className="menu-title">UI Elements</span>
                        <i className="arrow">
                            <FaArrowAltCircleRight/>
                        </i>
                    </a>
                    <div className="collapse">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="pages/ui-features/buttons.html">Buttons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="pages/ui-features/dropdowns.html">Dropdowns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="pages/ui-features/typography.html">Typography</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed"
                       data-toggle="collapse"
                       href="#ui-basic"
                       aria-expanded="false"
                       aria-controls="ui-basic">
                        <i>
                            <FaRegUser/>
                        </i>
                        <span
                            className="menu-title">UI Elements</span>
                        <i className="arrow">
                            <FaArrowAltCircleRight/>
                        </i>
                    </a>
                    <div className="collapse">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="pages/ui-features/buttons.html">Buttons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="pages/ui-features/dropdowns.html">Dropdowns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="pages/ui-features/typography.html">Typography</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed"
                       data-toggle="collapse"
                       href="#ui-basic"
                       aria-expanded="false"
                       aria-controls="ui-basic">
                        <i>
                            <FaRegUser/>
                        </i>
                        <span
                            className="menu-title">UI Elements</span>
                        <i className="arrow">
                            <FaArrowAltCircleRight/>
                        </i>
                    </a>
                    <div className="collapse">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="pages/ui-features/buttons.html">Buttons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="pages/ui-features/dropdowns.html">Dropdowns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="pages/ui-features/typography.html">Typography</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed"
                       data-toggle="collapse"
                       href="#ui-basic"
                       aria-expanded="false"
                       aria-controls="ui-basic">
                        <i>
                            <FaRegUser/>
                        </i>
                        <span
                            className="menu-title">UI Elements</span>
                        <i className="arrow">
                            <FaArrowAltCircleRight/>
                        </i>
                    </a>
                    <div className="collapse">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="pages/ui-features/buttons.html">Buttons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="pages/ui-features/dropdowns.html">Dropdowns</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   href="pages/ui-features/typography.html">Typography</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div className="dsh-content">
            ssak
        </div>
    </>;
}