import React from 'react';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Badge from './Badge';

const useStyles = createUseStyles({
    verticalSlideItem: st =>({
        height: st.height,
        margin: {
            top: '2rem'
        },
        padding: '0.4375rem 0.625rem',
        borderRadius: '0.4375rem',
        border: `1px solid ${st.borderCol}`
    }),
    quesDescrip: {
        '& p': {
            margin: {
                botton: '0.3rem'
            }
        }
    },
    quesTags: {
        display: 'flex',
    }
})

function VerticalSlideItem({st,data}) {
    const classes = useStyles(st);
    return (
        <div className={classes.verticalSlideItem}>
            <Container>
                <Row>
                    <Col md="9" lg="10">
                        <div className={classes.quesDescrip}>
                            <p>{data.text}</p>
                        </div>
                        <div className={classes.quesTags}>
                            {data.tags.map(tag => (
                                <Badge/>
                            ))}
                        </div>
                    </Col>
                    <Col>
                        <Button outline color="primary">Preview Answer</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default VerticalSlideItem;