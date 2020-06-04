import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsploitPageComponent } from './postsploit-page.component';

describe('PostsploitPageComponent', () => {
  let component: PostsploitPageComponent;
  let fixture: ComponentFixture<PostsploitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsploitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsploitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
