import { Injectable } from "@angular/core";
import { Course } from '../models/course'
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { UserManager } from "../../user-manager.service"

@Injectable()
export class CourseRepository {
    protected endpoint = 'http://52.15.171.47/courses';
    
    constructor(
        protected http: HttpClient,
        private userManager: UserManager
    ) {}

    //Get all courses
    public getAllCourses(): Observable<Course[]>{
        return this.http.get<Course[]>(this.endpoint).catch(x => this.handleException(x));
    }

    //create a new course
    public createCourse(courseid: number, coursetitle: string): Observable<Course[]>{
        const body = {course_id: courseid, title: coursetitle, instructor: this.userManager.user.first_name + ' ' + this.userManager.user.last_name, ID: this.userManager.user.ID};
        return this.http.post<Course[]>(this.endpoint, body).catch(x => this.handleException(x));
    }

    //enroll in a particular course
    public enrollCourse(courseid: number, coursetitle: string, courseInstructor: string): Observable<Course[]>{
        const body = {"course_id": courseid, "title": coursetitle, "instructor": courseInstructor, "ID": this.userManager.user.ID};
        return this.http.post(this.endpoint, body).catch(x => this.handleException(x));
    }

    //Get all courses for a user
    public  getUserCourses(): Observable<Course[]>{
        return this.http.get<Course[]>(this.endpoint + '/' + String(this.userManager.user.ID)).catch(x => this.handleException(x));
    }

    //delete all courses for a user
    public  deleteUserCourses(): Observable<Course[]>{
        return this.http.get<Course[]>(this.endpoint + '/' + this.userManager.user.ID).catch(x => this.handleException(x));
    }

    //Get a particular course
    public getIndCourse(courseid: number): Observable<Course[]>{
        return this.http.get<Course[]>(this.endpoint + '/classes/' + courseid).catch(x => this.handleException(x));
    }

    //delete a course for a user
    public deleteUserCourse(courseid: number): Observable<void>{
        return this.http.delete<void>(this.endpoint + '/' + this.userManager.user.ID + '/' + courseid).catch(x => this.handleException(x));
    }

    protected handleException(exception: any) {
        var message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(message);
    }
}
