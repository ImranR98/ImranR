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
            <Skill alt="Node.js" image={nodejs}></Skill>
            <Skill alt="Angular" image={angular}></Skill>
            <Skill alt="React" image={react}></Skill>
            <Skill alt="HTML" image={html}></Skill>
            <Skill alt="CSS" image={css}></Skill>
            <Skill alt="JavaScript" image={javascript}></Skill>
            <Skill alt="TypeScript" image={typescript}></Skill>
            <Skill alt="Flutter" image={flutter}></Skill>
            <Skill alt="MongoDB" image={mongodb}></Skill>
            <Skill alt="MySQL" image={mysql}></Skill>
            <Skill alt="PostgreSQL" image={postgresql}></Skill>
            <Skill alt="Sublime Text" image={sublime}></Skill>
            <Skill alt="Microsoft Visual Studio" image={vs}></Skill>
            <Skill alt="Visual Studio Code" image={vscode}></Skill>
            <Skill alt="Apigee API Management" image={apigee}></Skill>
            <Skill alt="Concourse CI" image={concourse}></Skill>
            <Skill alt="Heroku" image={heroku}></Skill>
            <Skill alt="Jira" image={jira}></Skill>
            <Skill alt="Pivotal Cloud Foundry" image={pcf}></Skill>
            <Skill alt="ServiceNOW" image={servicenow}></Skill>
            <Skill alt="Bash Scripting" image={bash}></Skill>
            <Skill alt="C++" image={cpp}></Skill>
            <Skill alt="Git" image={git}></Skill>
            <Skill alt="Java" image={java}></Skill>
            <Skill alt="Linux/UNIX" image={linux}></Skill>
            <Skill alt="Adobe Photoshop" image={photoshop}></Skill>
        </div>
    );
};

export default Skills;