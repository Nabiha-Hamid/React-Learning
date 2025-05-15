import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsComponent from './NewsComponent'

export class News extends Component {

    render() {
        return (
            <div className='container my-3'>
                this is a news Component
                <div class="row">
                    <div className='col-md-4'>
                        <NewsComponent title="my title" description="my description" />

                    </div>
                    <div className='col-md-4'>
                        <NewsComponent title="my title" description="my description" />

                    </div>
                    <div className='col-md-4'>
                        <NewsComponent title="my title" description="my description" />

                    </div>


                </div>

            </div>

        )
    }
}

export default News