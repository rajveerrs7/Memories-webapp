import React from 'react'
import { Media, Border, FullHeightCard, CustomCard, Overlay, Overlay2, GridStyled, Details, Title, CardActionsStyled } from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        height="200"
        image={post.selectedFile || "https://via.placeholder.com/200x200"} // fallback if no image
        alt={post.title}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />

      {/* Top-left overlay */}
      <Overlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {new Date(post.createdAt).toDateString()}
        </Typography>
      </Overlay>

      {/* Top-right edit button */}
      <Overlay2>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </Overlay2>

      {/* Tags */}
      <Details>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags?.map((tag) => `#${tag} `)}
        </Typography>
      </Details>

      {/* Title */}
      <Typography
        variant="h5"
        component="h2"
        sx={{ padding: "0 16px", fontWeight: 600 }}
      >
        {post.title}
      </Typography>

      {/* Message */}
      <CardContent sx={{ paddingTop: 0 }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>

      {/* Actions */}
      <CardActions
        sx={{
          padding: "0 16px 8px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp; {post.likeCount}
        </Button>
        <Button
          size="small"
          color="error"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> &nbsp; Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post