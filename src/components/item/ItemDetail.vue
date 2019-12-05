<template>
    <div class="page-has-left-panels page-has-right-panels" style="cursor: url(&quot;undefined&quot;), default;">
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane active" id="events" role="tabpanel">

            <div class="container">
                <div class="row">
                    <div class="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div class="ui-block">

                            
                            <!-- Today Events -->
                            
                            <div class="today-events calendar">
                                <div class="today-events-thumb">
                                    <div class="date">
                                        <div class="day-number">26</div>
                                        <div class="day-week">Saturday</div>
                                        <div class="month-year">March, 2016</div>
                                    </div>
                                </div>
                            
                                <div class="list">
                                    
                            
                                    <div class="day-event" id="accordion-1" data-month="12" data-day="2">
                            
                                        <div class="card">
                                            <div class="card-header" id="headingTwo-1">
                            
                                                <div class="event-time">
                                                    <time datetime="2004-07-24T18:18">
                                                        아이템명
                                                    </time>
                                                </div>
                                            </div>
                            
                                                <div class="card-body">
                                                    <h5 class="mb-0 title" style="margin-bottom:5px;">
                                                        {{item.itemName}}
                                                    </h5>
                                                </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo-1">
                            
                                                <div class="event-time">
                                                    <time datetime="2004-07-24T18:18">
                                                        가격
                                                    </time>
                                                </div>
                                            </div>
                            
                                                <div class="card-body">
                                                    <h5 class="mb-0 title" style="margin-bottom:5px;">
                                                        {{item.itemPrice}}
                                                    </h5>
                                                </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo-1">
                            
                                                <div class="event-time">
                                                    <time datetime="2004-07-24T18:18">
                                                        링크 주소
                                                    </time>
                                                </div>
                                            </div>
                            
                                                <div class="card-body">
                                                    <h5 class="mb-0 title" style="margin-bottom:5px;">
                                                        <a :href="item.itemLink" id="go-link">{{item.itemLink}}</a>
                                                    </h5>
                                                </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo-1">
                            
                                                <div class="event-time">
                                                    <time datetime="2004-07-24T18:18">
                                                        위시 메모
                                                    </time>
                                                </div>
                                            </div>
                            
                                                <div class="card-body">
                                                    <div class="card-body" style="padding-left:5px; padding-bottom:5px; font-size:0.9rem">
                                                        {{item.itemMemo}}
                                                    </div>
                                                </div>
                                        </div>
                                       <div class="card">
                                            <div class="card-header" id="headingTwo-1">
                            
                                                <div class="event-time">
                                                    <time datetime="2004-07-24T18:18">
                                                        공개 범위
                                                    </time>
                                                </div>
                                            </div>
                            
                                                <div class="card-body">
                                                    <h5 class="mb-0 title" style="margin-bottom:5px;">
                                                        {{item.visibleTo | visible}}
                                                    </h5>
                                                </div>
                                        </div>
                                        
                                    </div>
                            
                                </div>
                                
                            </div>
                            
                            <!-- ... end Today Events -->
                            <div class="btn-list">
                                <div class="list1">
                                    <button class="btn btn-breez btn-lg full-width" v-on:click="modify">수정</button>
                                    <button class="btn btn-primary btn-lg full-width" v-on:click="doDelete">삭제</button>
                                </div>
                            <div class="list2">
                                <button class="btn btn-secondary btn-lg" v-on:click="goToList">목록으로</button>
                            </div>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>

    <!-- Window-popup Event Public -->
    <!-- 
    <div class="modal fade" id="public-event" tabindex="-1" role="dialog" aria-labelledby="public-event" style="display: none;" aria-hidden="true">
        <div class="modal-dialog window-popup event-private-public public-event" role="document">
            <div class="modal-content">
                <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                    <svg class="olymp-close-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
                </a>
                <div class="modal-body">
                    <article class="hentry post has-post-thumbnail thumb-full-width private-event">

                        <div class="private-event-head inline-items">
                            <img src="img/avatar77-sm.jpg" alt="author">

                            <div class="author-date">
                                <a class="h3 event-title" href="#">Green Goo in Gotham</a>
                                <div class="event__date">
                                    <time class="published" datetime="2017-03-24T18:18">
                                        Saturday at 9:00am
                                    </time>
                                </div>
                            </div>

                            <div class="more">
                                <svg class="olymp-three-dots-icon">
                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                </svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Edit Event Settings</a>
                                    </li>
                                    <li>
                                        <a href="#">Mark as Completed</a>
                                    </li>
                                    <li>
                                        <a href="#">Delete Event</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="post-thumb">
                            <img src="img/event-public.jpg" alt="photo">
                        </div>

                        <div class="row">
                            <div class="col col-lg-7 col-md-7 col-sm-12 col-12">
                                <div class="post__author author vcard inline-items">
                                    <img src="img/avatar5-sm.jpg" alt="author">

                                    <div class="author-date">
                                        <a class="h6 post__author-name fn" href="#">Green Goo Rock</a> created the
                                        <a href="#">Event</a>
                                        <div class="post__date">
                                            <time class="published" datetime="2017-03-24T18:18">
                                                March 11 at 9:52pm
                                            </time>
                                        </div>
                                    </div>

                                </div>

                                <p>
                                    We’ll be playing in the Gotham Bar in May. Come and have a great time with us! Entry: $12
                                </p>
                            </div>
                            <div class="col col-lg-5 col-md-5 col-sm-12 col-12">
                                <div class="event-description">
                                    <h6 class="event-description-title">Public Event</h6>
                                    <div class="place inline-items">
                                        <svg class="olymp-add-a-place-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-add-a-place-icon"></use>
                                        </svg>
                                        <span>Gotham Bar</span>
                                    </div>

                                    <div class="place inline-items">
                                        <svg class="olymp-add-a-place-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-add-a-place-icon"></use>
                                        </svg>
                                        <span>Mar 26, 2016 at 9:00am UTC-8</span>
                                    </div>

                                    <ul class="friends-harmonic">
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic5.jpg" alt="friend">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic10.jpg" alt="friend">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic7.jpg" alt="friend">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic8.jpg" alt="friend">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="img/friend-harmonic2.jpg" alt="friend">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="all-users bg-breez">+24</a>
                                        </li>

                                        <li class="with-text">
                                            Will Assist
                                        </li>
                                    </ul>

                                    <a href="#" class="btn btn-blue btn-sm full-width">Invite Friends<div class="ripple-container"></div></a>

                                    <a href="#" class="btn btn-breez btn-sm full-width">Add to Calendar / Assist<div class="ripple-container"></div></a>
                                </div>
                            </div>
                        </div>


                        <div class="post-additional-info inline-items">

                            <a href="#" class="post-add-icon inline-items">
                                <svg class="olymp-heart-icon">
                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                </svg>
                                <span>8</span>
                            </a>

                            <ul class="friends-harmonic">
                                <li>
                                    <a href="#">
                                        <img src="img/friend-harmonic1.jpg" alt="friend">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/friend-harmonic9.jpg" alt="friend">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/friend-harmonic7.jpg" alt="friend">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/friend-harmonic4.jpg" alt="friend">
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="img/friend-harmonic8.jpg" alt="friend">
                                    </a>
                                </li>
                            </ul>

                            <div class="names-people-likes">
                                <a href="#">Diana </a>, <a href="#">Nicholas</a> and
                                <br>15 more liked this
                            </div>


                            <div class="comments-shared">
                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-speech-balloon-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
                                    </svg>
                                    <span>16 Comments</span>
                                </a>
                            </div>


                        </div>

                        <div class="control-block-button post-control-button">

                            <a href="#" class="btn btn-control">
                                <svg class="olymp-like-post-icon">
                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
                                </svg>
                            </a>

                            <a href="#" class="btn btn-control">
                                <svg class="olymp-comments-post-icon">
                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
                                </svg>
                            </a>

                            <a href="#" class="btn btn-control">
                                <svg class="olymp-share-icon">
                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                                </svg>
                            </a>

                        </div>

                    </article>

                    <div class="mCustomScrollbar ps ps--theme_default" data-mcs-theme="dark" data-ps-id="6af69237-528d-22fb-7c56-e0f4386f7881">

                        <ul class="comments-list">
                            <li class="comment-item">
                                <div class="post__author author vcard inline-items">
                                    <img src="img/author-page.jpg" alt="author">

                                    <div class="author-date">
                                        <a class="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
                                        <div class="post__date">
                                            <time class="published" datetime="2017-03-24T18:18">
                                                38 mins ago
                                            </time>
                                        </div>
                                    </div>

                                    <a href="#" class="more">
                                        <svg class="olymp-three-dots-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                        </svg>
                                    </a>

                                </div>

                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>3</span>
                                </a>
                                <a href="#" class="reply">Reply</a>
                            </li>
                            <li class="comment-item">
                                <div class="post__author author vcard inline-items">
                                    <img src="img/avatar1-sm.jpg" alt="author">

                                    <div class="author-date">
                                        <a class="h6 post__author-name fn" href="#">Mathilda Brinker</a>
                                        <div class="post__date">
                                            <time class="published" datetime="2017-03-24T18:18">
                                                1 hour ago
                                            </time>
                                        </div>
                                    </div>

                                    <a href="#" class="more">
                                        <svg class="olymp-three-dots-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                        </svg>
                                    </a>

                                </div>

                                <p>Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum
                                    quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                </p>

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>8</span>
                                </a>
                                <a href="#" class="reply">Reply</a>
                            </li>
                            <li class="comment-item">
                                <div class="post__author author vcard inline-items">
                                    <img src="img/avatar10-sm.jpg" alt="author">

                                    <div class="author-date">
                                        <a class="h6 post__author-name fn" href="#">Elaine Dreyfuss</a>
                                        <div class="post__date">
                                            <time class="published" datetime="2017-03-24T18:18">
                                                5 mins ago
                                            </time>
                                        </div>
                                    </div>

                                    <a href="#" class="more">
                                        <svg class="olymp-three-dots-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                        </svg>
                                    </a>

                                </div>

                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>8</span>
                                </a>
                                <a href="#" class="reply">Reply</a>
                            </li>
                        </ul>

                    <div class="ps__scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps__scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__scrollbar-y-rail" style="top: 0px; right: 0px;"><div class="ps__scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>

                    <form class="comment-form inline-items">

                        <div class="post__author author vcard inline-items">
                            <img src="img/author-page.jpg" alt="author">

                            <div class="form-group with-icon-right is-empty">
                                <textarea class="form-control" placeholder=""></textarea>
                                <div class="add-options-message">
                                    <a href="#" class="options-message">
                                        <svg class="olymp-camera-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
                                        </svg>
                                    </a>
                                </div>
                            <span class="material-input"></span></div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div> -->

    <!-- ... end Window-popup Event Public -->

    <!-- Window-popup Event Private Public -->
    <!-- 
    <div class="modal fade" id="private-event" tabindex="-1" role="dialog" aria-labelledby="private-event" aria-hidden="true">
        <div class="modal-dialog window-popup event-private-public private-event" role="document">
            <div class="modal-content">
                <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                    <svg class="olymp-close-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
                </a>
                <div class="modal-body">
                    <article class="hentry post has-post-thumbnail thumb-full-width private-event">

                    <div class="private-event-head inline-items">
                        <img src="img/avatar77-sm.jpg" alt="author">

                        <div class="author-date">
                            <a class="h3 event-title" href="#">Breakfast at the Agency</a>
                            <div class="event__date">
                                <time class="published" datetime="2017-03-24T18:18">
                                    Saturday at 9:00am
                                </time>
                            </div>
                        </div>

                        <div class="more"><svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                            <ul class="more-dropdown">
                                <li>
                                    <a href="#">Edit Event Settings</a>
                                </li>
                                <li>
                                    <a href="#">Mark as Completed</a>
                                </li>
                                <li>
                                    <a href="#">Delete Event</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="post-thumb">
                        <img src="img/event-private.jpg" alt="photo">
                    </div>

                    <div class="row">
                        <div class="col col-lg-7 col-md-7 col-sm-12 col-12">
                            <div class="post__author author vcard inline-items">
                                <img src="img/author-page.jpg" alt="author">

                                <div class="author-date">
                                    <a class="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a> created the <a href="#">Event</a>
                                    <div class="post__date">
                                        <time class="published" datetime="2017-03-24T18:18">
                                            March 11 at 9:52pm
                                        </time>
                                    </div>
                                </div>

                            </div>

                            <p>
                                Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the
                                new design project we have been working on. Cheers!
                            </p>
                        </div>
                        <div class="col col-lg-5 col-md-5 col-sm-12 col-12">
                            <div class="event-description">
                                <h6 class="event-description-title">Private Event</h6>
                                <div class="place inline-items">
                                    <svg class="olymp-add-a-place-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-add-a-place-icon"></use></svg>
                                    <span>Daydreamz Agency</span>
                                </div>

                                <div class="place inline-items">
                                    <svg class="olymp-small-calendar-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-small-calendar-icon"></use></svg>
                                    <span>Mar 26, 2016 at 9:00am UTC-8</span>
                                </div>

                                <ul class="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic5.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic10.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic7.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic8.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic2.jpg" alt="friend">
                                        </a>
                                    </li>

                                    <li class="with-text">
                                        Will Assist
                                    </li>
                                </ul>

                                <a href="#" class="btn btn-blue btn-sm full-width">Invite Friends</a>
                            </div>
                        </div>
                    </div>



                    <div class="post-additional-info inline-items">

                        <a href="#" class="post-add-icon inline-items">
                            <svg class="olymp-heart-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                            <span>8</span>
                        </a>

                        <ul class="friends-harmonic">
                            <li>
                                <a href="#">
                                    <img src="img/friend-harmonic1.jpg" alt="friend">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="img/friend-harmonic9.jpg" alt="friend">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="img/friend-harmonic7.jpg" alt="friend">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="img/friend-harmonic4.jpg" alt="friend">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="img/friend-harmonic8.jpg" alt="friend">
                                </a>
                            </li>
                        </ul>

                        <div class="names-people-likes">
                            <a href="#">Diana </a>, <a href="#">Nicholas</a> and
                            <br>15 more liked this
                        </div>


                        <div class="comments-shared">
                            <a href="#" class="post-add-icon inline-items">
                                <svg class="olymp-speech-balloon-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                                <span>16 Comments</span>
                            </a>
                        </div>


                    </div>

                    <div class="control-block-button post-control-button">

                        <a href="#" class="btn btn-control">
                            <svg class="olymp-like-post-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use></svg>
                        </a>

                        <a href="#" class="btn btn-control">
                            <svg class="olymp-comments-post-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                        </a>

                    </div>

                </article>

                    <div class="mCustomScrollbar ps ps--theme_default" data-mcs-theme="dark" data-ps-id="2a61d20c-91ae-4549-adf6-189e05e514fa">

                    <ul class="comments-list">
                        <li class="comment-item">
                            <div class="post__author author vcard inline-items">
                                <img src="img/author-page.jpg" alt="author">

                                <div class="author-date">
                                    <a class="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
                                    <div class="post__date">
                                        <time class="published" datetime="2017-03-24T18:18">
                                            38 mins ago
                                        </time>
                                    </div>
                                </div>

                                <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>

                            </div>

                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>

                            <a href="#" class="post-add-icon inline-items">
                                <svg class="olymp-heart-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                                <span>3</span>
                            </a>
                            <a href="#" class="reply">Reply</a>
                        </li>
                        <li class="comment-item">
                            <div class="post__author author vcard inline-items">
                                <img src="img/avatar1-sm.jpg" alt="author">

                                <div class="author-date">
                                    <a class="h6 post__author-name fn" href="#">Mathilda Brinker</a>
                                    <div class="post__date">
                                        <time class="published" datetime="2017-03-24T18:18">
                                            1 hour ago
                                        </time>
                                    </div>
                                </div>

                                <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>

                            </div>

                            <p>Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum
                                quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </p>

                            <a href="#" class="post-add-icon inline-items">
                                <svg class="olymp-heart-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                                <span>8</span>
                            </a>
                            <a href="#" class="reply">Reply</a>
                        </li>
                        <li class="comment-item">
                            <div class="post__author author vcard inline-items">
                                <img src="img/avatar10-sm.jpg" alt="author">

                                <div class="author-date">
                                    <a class="h6 post__author-name fn" href="#">Elaine Dreyfuss</a>
                                    <div class="post__date">
                                        <time class="published" datetime="2017-03-24T18:18">
                                            5 mins ago
                                        </time>
                                    </div>
                                </div>

                                <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>

                            </div>

                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>

                            <a href="#" class="post-add-icon inline-items">
                                <svg class="olymp-heart-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                                <span>8</span>
                            </a>
                            <a href="#" class="reply">Reply</a>
                        </li>
                    </ul>

                <div class="ps__scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps__scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__scrollbar-y-rail" style="top: 0px; right: 0px;"><div class="ps__scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>

                    <form class="comment-form inline-items">

                <div class="post__author author vcard inline-items">
                    <img src="img/author-page.jpg" alt="author">

                    <div class="form-group with-icon-right is-empty">
                        <textarea class="form-control" placeholder=""></textarea>
                        <div class="add-options-message">
                            <a href="#" class="options-message">
                                <svg class="olymp-camera-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-camera-icon"></use></svg>
                            </a>
                        </div>
                    <span class="material-input"></span></div>
                </div>

            </form>
                </div>
            </div>
        </div>
    </div> -->
    <div style="margin-top:4rem;"></div>
    </div>
</template>
<script>
export default {
    name: 'ItemDetail',
    mounted(){
        this.$http.get(this.$serverUrl+this.$route.path)
        .then(res=>{
			this.item = res.data;
        }).catch(e=>{
            console.error(e);
		})
		
    },
    components:{
    },
    data(){
        return {
            item: {
                itemName:'아이템이름',
				itemPrice: '20000',
				itemLink: 'http://localhost/3000',
				itemRank: '',
				visibleTo: 'f',
				itemMemo: '메모를입력한내용메모메모메모를입력한내용메모메모메모를입력한내용메모메모메모를입력한내용메모메모메모를입력한내용메모메모'
            }
        }
    },
    filters:{
        visible(to){
            if(to === 'f'){
                return '비공개'
            }else if(to === 't'){
                return '공개'
            }else{
                return '그룹공개'
            }
        }
    },
	methods:{
		modify(){
			this.$router.push({path:'/item/modify/'+this.item._id})
		},
		doDelete(){
			this.$http.delete(this.$serverUrl+this.$route.path)
			.then(()=>{
				this.$socket.emit('reqList', 'delete');
			}).catch(e=>{
				console.error(e);
			});
			this.$router.push({path:'/item/list/'});
        },
        goToList(){
            this.$router.push({path:'/item/list'});
        }
    }
}
</script>
<style scoped>
.today-events.calendar .card-header {
    padding: 0px 25px;
}
.today-events.calendar .card:last-child .card-header {
    padding-bottom: 0px;
}
#go-link{
    color: #38a9ff;
    text-decoration: underline;
}
.btn-list{
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 4rem;
    align-items: center;
    flex-direction:column;
}
.btn-list button{
    margin-left : 1rem;
    margin-right: 1rem;
    font-size: 0.9rem;
    padding:0.7rem 0.2rem;
    flex-direction:row;
}
.btn-list .list1{
    display:flex;
    flex-direction: row;
    width:100%;
}
.btn-list .list2 button{
    margin-top: 2rem;
    padding: 0.7rem 1.3rem;
}
</style>