import './Skills.css'
import Skill from './Skill//Skill'
import nodejs from '../../assets/images/nodejs.jpg'
import angular from '../../assets/images/angular.jpg'
import react from '../../assets/images/react.jpg'
import html from '../../assets/images/html.jpg'
import css from '../../assets/images/css.jpg'
import javascript from '../../assets/images/javascript.jpg'
import typescript from '../../assets/images/typescript.jpg'
import flutter from '../../assets/images/flutter.jpg'
import mongodb from '../../assets/images/mongodb.jpg'
import mysql from '../../assets/images/mysql.jpg'
import postgresql from '../../assets/images/postgresql.jpg'
import sublime from '../../assets/images/sublime.jpg'
import vs from '../../assets/images/vs.jpg'
import vscode from '../../assets/images/vscode.jpg'
import apigee from '../../assets/images/apigee.jpg'
import concourse from '../../assets/images/concourse.jpg'
import heroku from '../../assets/images/heroku.jpg'
import jira from '../../assets/images/jira.jpg'
import pcf from '../../assets/images/pcf.jpg'
import servicenow from '../../assets/images/servicenow.jpg'
import bash from '../../assets/images/bash.jpg'
import cpp from '../../assets/images/cpp.jpg'
import git from '../../assets/images/git.jpg'
import java from '../../assets/images/java.jpg'
import linux from '../../assets/images/linux.jpg'
import photoshop from '../../assets/images/photoshop.jpg'

const Skills = () => {
    return (
        <div className="skillGrid">
            <Skill alt="nodejs" image={nodejs}></Skill>
            <Skill alt="angular" image={angular}></Skill>
            <Skill alt="react" image={react}></Skill>
            <Skill alt="html" image={html}></Skill>
            <Skill alt="css" image={css}></Skill>
            <Skill alt="javascript" image={javascript}></Skill>
            <Skill alt="typescript" image={typescript}></Skill>
            <Skill alt="flutter" image={flutter}></Skill>
            <Skill alt="mongodb" image={mongodb}></Skill>
            <Skill alt="mysql" image={mysql}></Skill>
            <Skill alt="postgresql" image={postgresql}></Skill>
            <Skill alt="sublime" image={sublime}></Skill>
            <Skill alt="vs" image={vs}></Skill>
            <Skill alt="vscode" image={vscode}></Skill>
            <Skill alt="apigee" image={apigee}></Skill>
            <Skill alt="concourse" image={concourse}></Skill>
            <Skill alt="heroku" image={heroku}></Skill>
            <Skill alt="jira" image={jira}></Skill>
            <Skill alt="pcf" image={pcf}></Skill>
            <Skill alt="servicenow" image={servicenow}></Skill>
            <Skill alt="bash" image={bash}></Skill>
            <Skill alt="cpp" image={cpp}></Skill>
            <Skill alt="git" image={git}></Skill>
            <Skill alt="java" image={java}></Skill>
            <Skill alt="linux" image={linux}></Skill>
            <Skill alt="photoshop" image={photoshop}></Skill>
        </div>
    );
};

export default Skills;