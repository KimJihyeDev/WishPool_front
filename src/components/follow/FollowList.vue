<template>
<div class="">
    <div class="page-has-left-panels page-has-right-panels" style="cursor: url(&quot;undefined&quot;), default;">


        <div class="container">
            <div class="row">
                <div class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
                   
                    <div class="ui-block" style="margin-bottom:0px;">  
                        <!-- <div class="ui-block-title">
                            <h4 class="title">위시 아이템 리스트</h4>
                        </div> -->
                        <div class="top-header top-header-favorit">
					
                            <div class="profile-section with-social-menu-tabs">
                                <div class="row">
                                    <div class="col col-xl-8 m-auto col-lg-8 col-md-12">
                                        <ul class="nav nav-tabs social-menu-tabs" role="tablist">

                                            <li class="nav-item">
                                                <a class="nav-link active" data-toggle="tab" href="#home" role="tab">
                                                    <span class="nav-content"><h4>Followings</h4></span>
                                                </a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#about" role="tab">
                                                    <span class="nav-content"><h4>Followers</h4></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
				        </div>
                    <div class="search">
                        <form class="w-search" style="margin-bottom: 1rem;">
                            <h4 style="margin-top:1rem;">새로운 follow 찾기</h4>
                           <div class="form-group with-button is-empty">
                               <div style="inline-flex">
                               <select style="display: inline; width:20%; padding:15px 2px">
                                   <option>ID</option>
                                   <option>핸드폰</option>
                                </select>
                               <input type="text" style="display: inline; width:80%;" placeholder="ID/핸드폰 번호 검색" class="form-control" v-model="searchQuery">
                               </div>
                               <button data-toggle="modal" data-target="#create-event">
                                   <svg class="olymp-magnifying-glass-icon">
                                   <use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg>
                                </button>
                                <span class="material-input"></span>
                            </div>
                        </form>
                    </div>
                       
                    </div>

                </div>
            </div>
        </div>
        <!-- Tab panes -->
        
        <div class="tab-content">
            <!-- Wishes(미완료 리스트) -->
            
            <div class="tab-pane active" id="home" role="tabpanel">
                <div class="container">
                    <div class="ui-block">
            
				
				<!-- Notification List Frien Requests -->
				
				<ul class="notification-list friend-requests">
					<!-- <li>
						<div class="author-thumb">
							<img src="/assets//assets/img/avatar15-sm.jpg" alt="author">
						</div>
						<div class="notification-event" >
							<a href="#" class="h6 notification-friend">Tamara Romanoff</a>
							<span class="chat-message-item">Mutual Friend: Sarah Hetfield</span>
						</div>
						<span class="notification-icon">
                            <a href="#" class="accept-request request-del">
                                <span class="icon-minus without-texts">
                                    <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                </span>
                            </a>

                        </span>
                    </li> -->
                    <follow-user isPlus="false" />
				</ul>
				
				<!-- ... end Notification List Frien Requests -->
			</div>
                </div>
            </div>
            <!-- Completed(완료 리스트) -->
            <div class="tab-pane" id="about" role="tabpanel">
                <div class="container">
                    <div class="ui-block">
                
				<!-- Notification List Frien Requests -->
				
				<ul class="notification-list friend-requests">
					<follow-user isPlus="true" />
				</ul>
				
				<!-- ... end Notification List Frien Requests -->
			</div>
                </div>
            </div>

            

            
        </div>

    </div>
            <!-- Window-popup Create Event -->

<div class="modal fade" id="create-event" tabindex="-1" role="dialog" aria-labelledby="create-event" style="display: none;" aria-hidden="true">
	<div class="modal-dialog window-popup create-event" role="document">
    <div class="container">
   <div class="modal-content">
			
			<div class="modal-header">
				<h3 class="title" style="display:inline;">새로운 Follow 찾기</h3>
               <!-- modal close button(절대 삭제하지 말것) -->
                <a href="javascript:void(0)" class="close icon-close" data-dismiss="modal" aria-label="Close">
				    <svg class="olymp-close-icon" style="fill:black;"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
			    </a>
                <!-- end modal close button -->
			</div>
            <div class="modal-body">
			<form class="form-group label-floating is-select is-empty">

				<div class="btn-group bootstrap-select show-tick form-control style-2"><button type="button" class="btn dropdown-toggle btn-secondary" data-toggle="dropdown" role="button" title="Nothing selected"><span class="filter-option pull-left">Nothing selected</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off" role="textbox" aria-label="Search"></div><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0"><a tabindex="0" class=" dropdown-item" style="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><div class="inline-items">
										<div class="author-thumb">
											<img src="/assets/img/avatar52-sm.jpg" alt="author">
										</div>
											<div class="h6 author-title">Green Goo Rock</div>

										</div><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class=" dropdown-item" style="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><div class="inline-items">
											<div class="author-thumb">
												<img src="/assets/img/avatar74-sm.jpg" alt="author">
											</div>
											<div class="h6 author-title">Mathilda Brinker</div>
										</div><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class=" dropdown-item" style="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><div class="inline-items">
											<div class="author-thumb">
												<img src="/assets/img/avatar48-sm.jpg" alt="author">
											</div>
											<div class="h6 author-title">Marina Valentine</div>
										</div><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class=" dropdown-item" style="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><div class="inline-items">
											<div class="author-thumb">
												<img src="/assets/img/avatar75-sm.jpg" alt="author">
											</div>
											<div class="h6 author-title">Dave Marinara</div>
										</div><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class=" dropdown-item" style="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><div class="inline-items">
											<div class="author-thumb">
												<img src="/assets/img/avatar76-sm.jpg" alt="author">
											</div>
											<div class="h6 author-title">Rachel Howlett</div>
										</div><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select class="selectpicker form-control style-2 show-tick" multiple="" data-max-options="2" data-live-search="true" tabindex="-98">
					<option title="Green Goo Rock" data-content="<div class=&quot;inline-items&quot;>
										<div class=&quot;author-thumb&quot;>
											<img src=&quot;/assets/img/avatar52-sm.jpg&quot; alt=&quot;author&quot;>
										</div>
											<div class=&quot;h6 author-title&quot;>Green Goo Rock</div>

										</div>">Green Goo Rock
					</option>

					<option title="Mathilda Brinker" data-content="<div class=&quot;inline-items&quot;>
											<div class=&quot;author-thumb&quot;>
												<img src=&quot;/assets/img/avatar74-sm.jpg&quot; alt=&quot;author&quot;>
											</div>
											<div class=&quot;h6 author-title&quot;>Mathilda Brinker</div>
										</div>">Mathilda Brinker
					</option>

					<option title="Marina Valentine" data-content="<div class=&quot;inline-items&quot;>
											<div class=&quot;author-thumb&quot;>
												<img src=&quot;/assets/img/avatar48-sm.jpg&quot; alt=&quot;author&quot;>
											</div>
											<div class=&quot;h6 author-title&quot;>Marina Valentine</div>
										</div>">Marina Valentine
					</option>

					<option title="Dave Marinara" data-content="<div class=&quot;inline-items&quot;>
											<div class=&quot;author-thumb&quot;>
												<img src=&quot;/assets/img/avatar75-sm.jpg&quot; alt=&quot;author&quot;>
											</div>
											<div class=&quot;h6 author-title&quot;>Dave Marinara</div>
										</div>">Dave Marinara
					</option>

					<option title="Rachel Howlett" data-content="<div class=&quot;inline-items&quot;>
											<div class=&quot;author-thumb&quot;>
												<img src=&quot;/assets/img/avatar76-sm.jpg&quot; alt=&quot;author&quot;>
											</div>
											<div class=&quot;h6 author-title&quot;>Rachel Howlett</div>
										</div>">Rachel Howlett
					</option>

				</select></div>
			<span class="material-input"></span><span class="material-input"></span></form>

			<a href="#" class="btn btn-blue btn-lg full-width">Save Changes</a>
		</div>
			<!-- <div class="modal-body"> -->
                <!-- 검색 백업 -->
                <!-- <h4 class="control-label" id="first-h4">ID 검색</h4>
                <form class="w-search" style="margin-bottom:1rem; margin-right:0; width:100%;">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="ID로 검색해보세요" v-model="searchQuery">
                    <button>
                        <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg> -->
                        <!-- <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg> -->
                    <!-- </button>
                    <span class="material-input"></span>
                </div>
                </form>
                <h4 class="control-label">전화번호 검색</h4>
                <form class="w-search" style="margin-bottom:1rem; margin-right:0; width:100%;">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="전화번호로 검색해보세요" v-model="searchQuery">
                    <button  style="font-size:x-small"> -->
                        <!-- <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg> -->
                        <!-- <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg>
                    </button>
                    <span class="material-input"></span>
                </div>
                </form> -->
                    <!-- <div>
                        <h4>검색결과: {{searchQuery}}</h4>
                        <ul>
                            <follow-user isPlus="true" />
                        </ul>
                    </div>        
			</div> -->
		</div>
        </div>
	</div>
</div>

<!-- ... end Window-popup Create Event -->
<div style="margin-top:2.5rem;"></div>
    </div>
</template>
<script>
import FollowUser from './FollowUser.vue';

export default {
    name: 'FollowList',
    data(){
        return{
            searchQuery: ''
        }
    },
    components:{
        'follow-user':FollowUser
    }
}
</script>
<style scoped>

.nav, .navbar{
    flex-wrap: nowrap;
}
.nav-link{
    height:100%;
}
.social-menu-tabs.nav-tabs .nav-link {
    border-bottom:1px solid #e6ecf5;
}
.social-menu-tabs.nav-tabs .nav-link.active {
    border-bottom-color: #ff5e3a;
}
.nav-content{
    width: 100%;
    text-align: center;
    font-size: 1.1rem;
}
.nav-item{
    padding:0;
}
.form-group.with-button button{
    width: 45px;
    background: #ff5e3a;
}
.ui-block{
    width:100%;
}
.w-search {
    width: 90%;
    margin-top: 0.5rem;
}
.search{
    width: 100%;
    height: 120px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.icon-close{
    padding:0;
    right:unset;
    margin-right:unset;
    position: relative;
    top:unset;
}
</style>