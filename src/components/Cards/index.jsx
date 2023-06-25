import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.css'
// import imag from 'src/img/freak.jpg'

export default function ImgMediaCard() {
  return (
    <>
    <div className='recent'>Recent Jobs</div>
    <div className='cardjob'>
    <Card className='one'  sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="job"
        height="140"
        image="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          OST PLATFORM
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae blanditiis officia, nobis et sed maiores culpa ducimus dignissimos aspernatur voluptatibus!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 
    <Card className='two'  sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          1mg
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam obcaecati impedit esse. Distinctio et voluptatum dolor rerum recusandae temporibus! Explicabo!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className='three'  sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="job"
        height="140"
        image="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lenkart
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium incidunt nemo voluptates rem rerum sit deserunt illo, veniam nobis quis!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className='four'  sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="job"
        height="140"
        image="https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Infoedge
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum beatae ad vel officiis quam alias maiores aliquam soluta perferendis!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}
