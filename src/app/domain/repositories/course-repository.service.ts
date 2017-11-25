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

    //create a new course
    public postCourse(courseid: number, coursetitle: string): Observable<Course[]>{
        const body = {course_id: courseid, title: coursetitle, instructor: this.userManager.user.firstname + ' ' + this.userManager.user.lastname};
        return this.http.post<Course[]>(this.endpoint, body).catch(x => this.handleException(x));
    }

    //Get all courses for a user
    public  getUserCourses(): Observable<Course[]>{
        return this.http.get<Course[]>(this.endpoint + '/' + this.userManager.user.id).catch(x => this.handleException(x));
    }

    //Get all courses for a user
    public  deleteUserCourses(): Observable<Course[]>{
        return this.http.get<Course[]>(this.endpoint + '/' + this.userManager.user.id).catch(x => this.handleException(x));
    }

    //Get a particular course
    public getIndCourse(courseid: number): Observable<Course[]>{
        return this.http.get<Course[]>(this.endpoint + '/classes/' + courseid).catch(x => this.handleException(x));
    }

    //delete a course for a user
    public deleteUserCourse(courseid: number): Observable<void>{
        return this.http.delete<void>(this.endpoint + '/' + this.userManager.user.id + '/' + courseid).catch(x => this.handleException(x));
    }

    protected handleException(exception: any) {
        var message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(message);
    }
}
